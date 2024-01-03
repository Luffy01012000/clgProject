img=(
)

for i in ${img[@]};do
 docker rmi $i
#  kubectl delete replicaset  $i
echo $i
 done

