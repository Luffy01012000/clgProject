# digitalocean_firewall.worker_firewall:
resource "digitalocean_firewall" "k8s_firewall" {
  #   created_at = "2023-12-19T20:37:12Z"
  droplet_ids = [
    391258040,
  ]
  #   id              = "03f5fab5-6cc0-4f5d-aa6c-a9079405745a"
  name = "k8s"
  #   pending_changes = []
  #   status          = "succeeded"
  #   tags            = []

  inbound_rule {
    port_range = "22"
    protocol   = "tcp"
    source_addresses = [
      "0.0.0.0/0",
      "::/0",
    ]
    source_droplet_ids        = []
    source_load_balancer_uids = []
    source_tags               = []
  }
  inbound_rule {
    port_range = "443"
    protocol   = "tcp"
    source_addresses = [
      "0.0.0.0/0",
      "::/0",
    ]
    source_droplet_ids        = []
    source_load_balancer_uids = []
    source_tags               = []
  }
  inbound_rule {
    port_range = "6443"
    protocol   = "tcp"
    source_addresses = [
      "0.0.0.0/0",
      "::/0",
    ]
    source_droplet_ids        = []
    source_load_balancer_uids = []
    source_tags               = []
  }
  inbound_rule {
    port_range = "80"
    protocol   = "tcp"
    source_addresses = [
      "0.0.0.0/0",
      "::/0",
    ]
    source_droplet_ids        = []
    source_load_balancer_uids = []
    source_tags               = []
  }
  inbound_rule {
    port_range = "all"
    protocol   = "tcp"
    source_addresses = [
      "0.0.0.0/0",
      "::/0",
    ]
    source_droplet_ids        = []
    source_load_balancer_uids = []
    source_tags               = []
  }

  outbound_rule {
    destination_addresses = [
      "0.0.0.0/0",
      "::/0",
    ]
    destination_droplet_ids        = []
    destination_load_balancer_uids = []
    destination_tags               = []
    protocol                       = "icmp"
  }
  outbound_rule {
    destination_addresses = [
      "0.0.0.0/0",
      "::/0",
    ]
    destination_droplet_ids        = []
    destination_load_balancer_uids = []
    destination_tags               = []
    port_range                     = "22"
    protocol                       = "tcp"
  }
  outbound_rule {
    destination_addresses = [
      "0.0.0.0/0",
      "::/0",
    ]
    destination_droplet_ids        = []
    destination_load_balancer_uids = []
    destination_tags               = []
    port_range                     = "6443"
    protocol                       = "tcp"
  }
  outbound_rule {
    destination_addresses = [
      "0.0.0.0/0",
      "::/0",
    ]
    destination_droplet_ids        = []
    destination_load_balancer_uids = []
    destination_tags               = []
    port_range                     = "all"
    protocol                       = "tcp"
  }
  outbound_rule {
    destination_addresses = [
      "0.0.0.0/0",
      "::/0",
    ]
    destination_droplet_ids        = []
    destination_load_balancer_uids = []
    destination_tags               = []
    port_range                     = "all"
    protocol                       = "udp"
  }
  outbound_rule {
    destination_addresses = [
      "0.0.0.0/0",
    ]
    destination_droplet_ids        = []
    destination_load_balancer_uids = []
    destination_tags               = []
    port_range                     = "80"
    protocol                       = "tcp"
  }
}

# digitalocean_firewall.worker_firewall:
resource "digitalocean_firewall" "worker_firewall" {
  #   created_at = "2023-12-19T20:48:07Z"
  droplet_ids = [
    391258230,
    391258231,
  ]
  #   id              = "d3328628-6d32-4d9e-9bdf-fe259ceaf60a"
  name = "workers"
  #   pending_changes = []
  #   status          = "succeeded"
  tags = []

  inbound_rule {
    protocol = "icmp"
    source_addresses = [
      "0.0.0.0/0",
      "::/0",
    ]
    source_droplet_ids        = []
    source_load_balancer_uids = []
    source_tags               = []
  }
  inbound_rule {
    port_range = "22"
    protocol   = "tcp"
    source_addresses = [
      "0.0.0.0/0",
      "::/0",
    ]
    source_droplet_ids        = []
    source_load_balancer_uids = []
    source_tags               = []
  }
  inbound_rule {
    port_range = "443"
    protocol   = "tcp"
    source_addresses = [
      "0.0.0.0/0",
      "::/0",
    ]
    source_droplet_ids        = []
    source_load_balancer_uids = []
    source_tags               = []
  }
  inbound_rule {
    port_range = "6443"
    protocol   = "tcp"
    source_addresses = [
      "0.0.0.0/0",
      "::/0",
    ]
    source_droplet_ids        = []
    source_load_balancer_uids = []
    source_tags               = []
  }
  inbound_rule {
    port_range = "80"
    protocol   = "tcp"
    source_addresses = [
      "0.0.0.0/0",
      "::/0",
    ]
    source_droplet_ids        = []
    source_load_balancer_uids = []
    source_tags               = []
  }
  inbound_rule {
    port_range = "all"
    protocol   = "tcp"
    source_addresses = [
      "0.0.0.0/0",
      "::/0",
    ]
    source_droplet_ids        = []
    source_load_balancer_uids = []
    source_tags               = []
  }
  inbound_rule {
    port_range = "all"
    protocol   = "udp"
    source_addresses = [
      "0.0.0.0/0",
      "::/0",
    ]
    source_droplet_ids        = []
    source_load_balancer_uids = []
    source_tags               = []
  }

  outbound_rule {
    destination_addresses = [
      "0.0.0.0/0",
      "::/0",
    ]
    destination_droplet_ids        = []
    destination_load_balancer_uids = []
    destination_tags               = []
    protocol                       = "icmp"
  }
  outbound_rule {
    destination_addresses = [
      "0.0.0.0/0",
      "::/0",
    ]
    destination_droplet_ids        = []
    destination_load_balancer_uids = []
    destination_tags               = []
    port_range                     = "32000"
    protocol                       = "tcp"
  }
  outbound_rule {
    destination_addresses = [
      "0.0.0.0/0",
      "::/0",
    ]
    destination_droplet_ids        = []
    destination_load_balancer_uids = []
    destination_tags               = []
    port_range                     = "all"
    protocol                       = "tcp"
  }
  outbound_rule {
    destination_addresses = [
      "0.0.0.0/0",
      "::/0",
    ]
    destination_droplet_ids        = []
    destination_load_balancer_uids = []
    destination_tags               = []
    port_range                     = "all"
    protocol                       = "udp"
  }
}
