oc login -u system -p admin
oc new-project customers
oc new-build --binary --name=customers-service -l app=customers-service
oc start-build customers-service --from-dir=. --follow
oc new-app customers-service -l app=customers-service
oc expose service customers-service
