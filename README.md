1. oc login -u system -p admin
2. oc new-project customers
3. oc new-build --binary --name=customers-service -l app=customers-service
4. oc start-build customers-service --from-dir=. --follow
5. oc new-app customers-service -l app=customers-service
6. oc expose service customers-service
