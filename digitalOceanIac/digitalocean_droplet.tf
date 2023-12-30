# ssh key
# resource "digitalocean_ssh_key" "test" {
#   name = "k8s"
#   public_key = "~/.ssh/id_ed25519_githubSDP.pub"
# }

# digitalocean_droplet.master_droplet:
resource "digitalocean_droplet" "master_droplet" {
  image       = "ubuntu-22-04-x64"
  name        = "master"
  region      = "blr1"
  resize_disk = true
  ssh_keys    = [var.ssh_keys]
  size        = "s-2vcpu-4gb"
  tags = [
    "k8s:master",
  ]
  provisioner "local-exec" {
    command = "echo master ${self.id} >> ./droplets_ids/hosts"
  }
  #   disk                 = 80
  #   id                   = "391258040"
  #   memory               = 4096
  #   status               = "active"
  #   monitoring           = false
  #   ipv4_address         = "68.183.84.32"
  #   ipv4_address_private = "10.122.0.2"
  #   ipv6                 = false
  #   locked               = false
  #   price_hourly         = 0.03571
  #   price_monthly        = 24
  #   private_networking   = true #deprecated
  #   backups              = false
  #   created_at           = "2023-12-19T19:50:34Z"
  #   urn                  = "do:droplet:391258040"
  #   vcpus                = 2
  #   volume_ids           = []
  #   vpc_uuid             = "d71d64fd-9d52-4c6c-8aaa-e7e99d6f8153"
}

# digitalocean_droplet.worker1_droplet:
resource "digitalocean_droplet" "worker1_droplet" {

  image       = "ubuntu-22-04-x64"
  name        = "worker-01"
  region      = "blr1"
  resize_disk = true
  size        = "s-2vcpu-2gb"
  ssh_keys    = [var.ssh_keys]
  tags = [
    "k8s:worker",
  ]
  #   disk                 = 60
  #   id                   = "391258231"
  #   memory               = 2048
  #   status               = "active"
  #   backups              = false
  #   created_at           = "2023-12-19T19:52:07Z"
  #   ipv4_address         = "64.227.149.146"
  #   ipv4_address_private = "10.122.0.3"
  #   ipv6                 = false
  #   locked               = false
  #   monitoring           = false
  #   price_hourly         = 0.02679
  #   price_monthly        = 18
  #   private_networking   = true #deprecated
  #   urn                  = "do:droplet:391258231"
  #   vcpus                = 2
  #   volume_ids           = []
  #   vpc_uuid             = "d71d64fd-9d52-4c6c-8aaa-e7e99d6f8153"
}

# digitalocean_droplet.worker2_droplet:
resource "digitalocean_droplet" "worker2_droplet" {
  image       = "ubuntu-22-04-x64"
  name        = "worker-02"
  region      = "blr1"
  resize_disk = true
  size        = "s-2vcpu-2gb"
  ssh_keys    = [var.ssh_keys]
  tags = [
    "k8s:worker",
  ]
  #   disk                 = 60
  #   id                   = "391258230"
  #   memory               = 2048
  #   status               = "active"
  #   backups              = false
  #   created_at           = "2023-12-19T19:52:07Z"
  #   ipv4_address         = "64.227.149.149"
  #   ipv4_address_private = "10.122.0.4"
  #   ipv6                 = false
  #   locked               = false
  #   monitoring           = false
  #   price_hourly         = 0.02679
  #   price_monthly        = 18
  #   private_networking   = true
  #   urn                  = "do:droplet:391258230"
  #   vcpus                = 2
  #   volume_ids           = []
  #   vpc_uuid             = "d71d64fd-9d52-4c6c-8aaa-e7e99d6f8153"
}

# resource "digitalocean_droplet" "worker_droplet" {
#   count       = 2
#   image       = "ubuntu-22-04-x64"
#   name        = "worker-${count.index + 1}"
#   region      = "blr1"
#   resize_disk = true
#   ssh_keys    = [38816333]
#   size        = "s-2vcpu-2gb"
#   tags = [
#     "k8s:worker",
#   ]

#   provisioner "local-exec" {
#     command = "echo worker-${count.index + 1} ${self.id} >> ./droplets_ids/hosts"
#   }
# }
resource "digitalocean_project_resources" "k8s" {
  project   = data.digitalocean_project.playground.id
  resources = [digitalocean_droplet.master_droplet.urn, digitalocean_droplet.worker1_droplet.urn, digitalocean_droplet.worker2_droplet.urn]
}

