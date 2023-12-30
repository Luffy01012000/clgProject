img=( "backend-deployment-65b44cb859",
"backend-deployment-68b6dddb89",
"backend-deployment-6b8f596565",
 "metrics-server-fbb469ccc"
)

for i in ${img[@]};do
#  docker rmi $i
 kubectl delete replicaset  $i
# echo $i
 done

