terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~>5.0"
    }
  }

  required_version = ">= 1.4.0"

}

resource "aws_s3_bucket" "my_remote_s3_bucket" {
  bucket        = "clgproject-remote--state-bucket"
  force_destroy = true
}

resource "aws_dynamodb_table" "Dynamodb_table" {
  name         = "clgproject_state-table"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "LockID" #this has attribute
  attribute {
    name = "LockID"
    type = "S"
  }
}
