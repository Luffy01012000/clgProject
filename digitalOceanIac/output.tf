output "droplet1_ip" {
  value = digitalocean_droplet.worker1_droplet.ipv4_address
}
output "droplet2_ip" {
  value = digitalocean_droplet.worker2_droplet.ipv4_address
}

output "droplet_public_ip_master" {
  value = digitalocean_droplet.master_droplet[*].ipv4_address
}


output "master-1_id" {
  value = digitalocean_droplet.master_droplet[*].id
}
output "worker-1_id" {
  value = digitalocean_droplet.worker1_droplet.id
}
output "worker-2_id" {
  value = digitalocean_droplet.worker2_droplet.id
}

