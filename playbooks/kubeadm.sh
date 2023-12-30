#!/bin/bash
set -e

# Set hostname
echo "-------------Setting hostname-------------"
# hostnamectl set-hostname $1

# Disable swap
echo "-------------Disabling swap-------------"
swapoff -a
sudo sed -i '/ swap / s/^\(.*\)$/#\1/g' /etc/fstab

echo "---------Installing docker-----------------"
sudo apt update && sudo apt install -y docker.io

# Creating config.toml
echo "----------------Creating config.toml---------------------"
if ls /etc/containerd;then
    sudo rm -dr /etc/containerd
    echo "removed dir"
else
    echo "nothing to remove"
fi
sudo mkdir /etc/containerd
sudo containerd config default > /etc/containerd/config.toml

#change this in config.tomal
# SystemdCgroup = false->true
# sandbox_image = "registry.k8s.io/pause:3.8->3.9"

echo "------------configuration of config.toml---------------"
sudo sed -i 's/pause:3.8/pause:3.9/g' /etc/containerd/config.toml
sudo sed -i 's/SystemdCgroup = false/SystemdCgroup = true/g' /etc/containerd/config.toml

sudo systemctl restart containerd
sudo systemctl enable --now containerd

# networking config it will create conflict with ipalloc range 10.0.0.0/16 with weave 10.0.0.0/12
cat <<EOF | sudo tee /etc/modules-load.d/k8s.conf
overlay
br_netfilter
EOF

sudo modprobe overlay
sudo modprobe br_netfilter

# sysctl params required by setup, params persist across reboots
cat <<EOF | sudo tee /etc/sysctl.d/k8s.conf
net.bridge.bridge-nf-call-iptables  = 1
net.bridge.bridge-nf-call-ip6tables = 1
net.ipv4.ip_forward                 = 1
EOF

# Apply sysctl params without reboot
sudo sysctl --system
lsmod | grep br_netfilter
lsmod | grep overlay
sysctl net.bridge.bridge-nf-call-iptables net.bridge.bridge-nf-call-ip6tables net.ipv4.ip_forward

echo "-------------Installing pkg-------------"
sudo apt update && sudo apt install -y  apt-transport-https ca-certificates curl gpg vim

# rm /etc/apt/keyrings/kubernetes-apt-keyring.gpg

sudo curl -fsSL https://pkgs.k8s.io/core:/stable:/v1.29/deb/Release.key | sudo gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg 


echo "-------------Pasting gpg keys-------------"
sudo echo 'deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] https://pkgs.k8s.io/core:/stable:/v1.29/deb/ /' | sudo tee /etc/apt/sources.list.d/kubernetes.list

# # Install kubectl, kubelet and kubeadm
echo "-------------Installing Kubectl, Kubelet and Kubeadm-------------"
sudo apt update 
sudo apt install -y kubelet kubeadm kubectl
sudo apt-mark hold kubelet kubeadm kubectl

echo "-------------Printing Kubeadm version-------------"
sudo kubeadm version