terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~>5.0"
    }
  }

  required_version = ">= 1.4.0"

  # backend "s3" {
  #   bucket         = "clgproject-remote--state-bucket"
  #   key            = "terraform.tfstate" #adding state, we use key to do so
  #   region         = "us-east-1"
  #   dynamodb_table = "clgproject_state-table"
  # }

}

