terraform {
  required_providers {
    digitalocean = {
      source  = "digitalocean/digitalocean"
      version = "~>2.0"
    }
  }
  required_version = ">= 1.4.0"

}

data "digitalocean_project" "playground" {
  name = "k8s"
}
