provider "aws" {
  # region  = "us-east-1"
  region = var.region
  # use when `shared_credentials_files`  is not configured
  # access_key = var.access_key
  # secret_key = var.secret_key
  shared_credentials_files = ["~/.aws/credentials"]
  # shared_config_files = [ "~/.aws/credentials" ]
  profile = "default"

}
