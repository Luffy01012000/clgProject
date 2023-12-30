sudo kubeadm init

mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config

export KUBECONFIG=/etc/kubernetes/admin.conf >>~/.bashrc

# need configured weave.yaml if configured networking routes
# sudo kubectl apply -f https://github.com/weaveworks/weave/releases/download/v2.8.1/weave-daemonset-k8s.yaml

# current_hostname=$(hostname)
current_hostname=$(whoami)

#aws
if [ "$current_hostname" == "ubuntu" ]; then
    sudo kubectl apply -f /home/ubuntu/weave-daemonset-k8s.yaml
    sudo kubectl apply -f /home/ubuntu/metric.yaml
#digitalOcean
elif [ "$current_hostname" == "root" ]; then
    sudo kubectl apply -f /root/weave-daemonset-k8s.yaml
    sudo kubectl apply -f /root/metric.yaml

fi

# #aws
# if hostname eq ubuntu;then
# sudo kubectl apply -f /home/ubuntu/weave-daemonset-k8s.yaml
# fi
# #digitalOcean
# if hostname eq root;then
# sudo kubectl apply -f /root/weave-daemonset-k8s.yaml
# fi

sudo kubeadm token create --print-join-command >~/join-command.sh
