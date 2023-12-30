variable "region" {
  default = "us-east-1"
}

# use when not using shared_credentials_files
# variable "access_key" {}
# variable "secret_key" {}

variable "ami" {
  type = map(string)
  default = {
    "master" = "ami-0c7217cdde317cfec"
    "worker" = "ami-0c7217cdde317cfec"
  }
}

variable "instance_type" {
  type = map(string)
  default = {
    "master" = "t2.medium"
    "worker" = "t2.micro"
  }
}

variable "key" {
  type = map(string)
  default = {
    "demokey" = "awsdmo"
  }
}
