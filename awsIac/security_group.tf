resource "aws_security_group" "k8s_master1" {
  name        = "k8s_masternode_SG"
  description = "k8s_master Security Group"
  #   vpc_id      = aws_vpc.main.id

  ingress {
    description      = "ssh"
    from_port        = 22
    to_port          = 22
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"] #open for all
    ipv6_cidr_blocks = ["::/0"]
  }

  ingress {
    description      = "API Server"
    from_port        = 6443
    to_port          = 6443
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"] #open for all
    ipv6_cidr_blocks = ["::/0"]
  }

  ingress {
    description      = "etcd"
    from_port        = 2379
    to_port          = 2380
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"] #open for all
    ipv6_cidr_blocks = ["::/0"]
  }

  ingress {
    description      = "Weavenet TCP"
    from_port        = 6783
    to_port          = 6783
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"] #open for all
    ipv6_cidr_blocks = ["::/0"]
  }

  ingress {
    description      = "Weavenet UDP"
    from_port        = 6784
    to_port          = 6784
    protocol         = "udp"
    cidr_blocks      = ["0.0.0.0/0"] #open for all
    ipv6_cidr_blocks = ["::/0"]
  }

  ingress {
    description      = "kubelet api, kube-scheduler, kube-controller-manager, read-only kubelet api, kubelet health"
    from_port        = 10248
    to_port          = 10260
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"] #open for all
    ipv6_cidr_blocks = ["::/0"]
  }

  ingress {
    description      = "NodePort services"
    from_port        = 30000
    to_port          = 32767
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"] #open for all
    ipv6_cidr_blocks = ["::/0"]
  }

  egress {
    # everthing is open
    from_port        = 0
    to_port          = 0
    protocol         = "-1"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }

  tags = {
    Name = "k8s_masternode_SG"
  }
}

resource "aws_security_group" "k8s_slaves" {
  name        = "k8s_slaves_SG"
  description = "k8s_slaves Security Group"
  #   vpc_id      = aws_vpc.main.id

  ingress {
    description      = "ssh"
    from_port        = 22
    to_port          = 22
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"] #open for all
    ipv6_cidr_blocks = ["::/0"]
  }

  ingress {
    description      = "Weavenet TCP"
    from_port        = 6783
    to_port          = 6783
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"] #open for all
    ipv6_cidr_blocks = ["::/0"]
  }

  ingress {
    description      = "Weavenet UDP"
    from_port        = 6784
    to_port          = 6784
    protocol         = "udp"
    cidr_blocks      = ["0.0.0.0/0"] #open for all
    ipv6_cidr_blocks = ["::/0"]
  }

  ingress {
    description      = "kubelet api, kube-scheduler, kube-controller-manager, read-only kubelet api, kubelet health"
    from_port        = 10248
    to_port          = 10260
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"] #open for all
    ipv6_cidr_blocks = ["::/0"]
  }

  ingress {
    description      = "NodePort services"
    from_port        = 30000
    to_port          = 32767
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"] #open for all
    ipv6_cidr_blocks = ["::/0"]
  }

  egress {
    # everthing is open
    from_port        = 0
    to_port          = 0
    protocol         = "-1"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }

  tags = {
    Name = "k8s_slaves_SG"
  }
}
