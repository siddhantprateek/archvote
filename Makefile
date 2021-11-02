

ROOT_CLIENT := './client/'
ROOT_SERVER := './server/'

help:
	@printf '\tinstall-dependencies\n'
	@printf '\tget-client-pkg\n'
	@printf '\tget-server-pkg\n'
	@printf '\tserve-client\n'
	@printf '\tserve-backend\n'
	@printf '\tcontainer-image\n'

# Total No. of dependencies 
N := 2
build:
	@printf 'STEP 1/${N}\n' sudo apt-get update
	@printf 'STEP 2/${N}\n' sudo apt-get install nodejs


get-client-pkg:
	@cd ${ROOT_CLIENT} && npm install


get-server-pkg:
	@cd ${ROOT_SERVER} && npm install

serve-client:
	@cd ${ROOT_CLIENT} && npm run start

serve-backend: 
	@cd ${ROOT_SERVER} && node server.js

container-image:
	@printf 'pulling container images...\n' 