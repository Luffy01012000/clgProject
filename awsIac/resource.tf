resource "aws_instance" "master_server" {
  ami             = var.ami["master"]
  instance_type   = var.instance_type["master"]
  key_name        = var.key["demokey"]
  security_groups = ["k8s_masternode_SG"]
  depends_on      = [aws_instance.worker_server]
  tags = {
    Name = "MasterNode1"
    Role = "Master Node"
  }
 provisioner "local-exec" {
    command = "echo 'master ${self.public_ip}'>>./files/hosts"
  }
  provisioner "local-exec" {
    command = "ansible-playbook -i ${self.public_ip} awsk8splaybook.yaml -u ubuntu --private-key=~/Downloads/awsdmo.pem"
  }
}

resource "aws_instance" "worker_server" {
  count         = 1 #InCase want more worker nodes
  ami           = var.ami["worker"]
  instance_type = var.instance_type["worker"]
  key_name      = var.key["demokey"]
  # Use below when exporting new to aws 
  # key_name = aws_key_pair.aws_k8s.key_name
  security_groups = ["k8s_slaves_SG"]
  tags = {
    Name = "WorkerNode${count.index + 1}"
    Role = "Worker Node"
  }
  provisioner "local-exec" {
    command = "echo 'worker-${count.index+1} ${self.public_ip}'>>./files/hosts"
  }
  provisioner "local-exec" {
    command = "ansible-playbook -i ${self.public_ip} awsk8splaybook.yaml -u ubuntu --private-key=~/Downloads/awsdmo.pem"
  }
}



# Use below when exporting new to aws 
# resource "aws_key_pair" "aws_k8s" {
#   key_name   = "clgproject"
#   public_key = file("./awsclg.pub")
# }




