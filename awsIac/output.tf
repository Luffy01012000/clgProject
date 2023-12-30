output "ec2_public_ip_master1" {
  value = aws_instance.master_server[*].public_ip
}
output "ec2_public_ip_worker1" {
  value = aws_instance.worker_server[*].public_ip
}