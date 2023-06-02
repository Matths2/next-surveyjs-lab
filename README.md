# Next Surveyjs tanzu app

This project use Nextjs and Surveyjs to create a simple survey app.
The backbone and deployment configurations of this repo is based on a TAP (Tanzu Application Platform) nodejs express accelerator. Which has been modified to contain the following stack:

- Postgres
- Prisma
- Nextjs
- Surveyjs
- Tailwindcss

## Getting Started

The following steps will get you started with this project.

### Development

From root directory run the following commands:

1. `docker-compose build`
2. `docker-compose up -d`

### Production
Be aware that in the current state of the project, the production build is not mature enough to be deployed to a production environment. In the current state, expect build error related to missing environment variable and database connection.

 In addition to these following steps, you will need to setup a postgres service in the cluster and supply environment variable ```DATABASE_URL``` pointing to the service. 

The following steps assumes you have credentials and has a ssh session established to the kubernetes cluster established.

<br>
 Write the following command in your terminal to set the namespace you want to deploy to.

```bash
export YOUR_NAMESPACE=<YOUR_NAMESPACE>
```

<br>
Write the following command in your terminal to deploy the application to the cluster.

```bash
tanzu apps workload create next-surveyjs-lab \
--git-repo https://github.com/Matths2/next-surveyjs-lab \
--git-branch main \
--type web \
--label app.kubernetes.io/part-of=node-express \
--yes \
--namespace ${YOUR_NAMESPACE}
```

<br>
Write the following command in your terminal to get build status and the url to the application.

```bash
tanzu apps workload get -n ${YOUR_NAMESPACE} node-express
```

Push to the ```main``` branch of this repo will trigger a new build and deployment to the cluster.
<br>

## TODO
 * Connect to tanzu postgres database service
 * Create a seed db script for local development
 * Improve app GUI, save survey response to database

For more information:

- [Friends TAP confluence](https://confluence.shared.int.tds.tieto.com/x/PKC2EQ)
