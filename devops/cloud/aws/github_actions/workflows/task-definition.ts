module.exports = {
    requiresCompatibilities: [
        "FARGATE"
    ],
    "inferenceAccelerators": [],
    "containerDefinitions": [
        {
            "name": "mongo-1197",
            "image": "geppettotest/mongo-local:april2020",
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "27017",
                    "protocol": "tcp",
                    "hostPort": "27017"
                }
            ],
            "environmentFiles": null,
            "environment": [{
                "name": "MONGO_INITDB_ROOT_PASSWORD",
                "value": "password"
              },
              {
                "name": "MONGO_INITDB_ROOT_USERNAME",
                "value": "admin"
              }],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/data/db",
                  "sourceVolume": "testapp"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/testapp",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },
        {
            "name": "apigateway-1197",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-testapp-1197-apigateway:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8000",
                    "protocol": "tcp",
                    "hostPort": "8000"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@127.0.0.1:27017/testapp_1197?authSource=admin"},{"name":"MONGO_DOMAIN","value":"127.0.0.1"},{"name":"SECURITYURL","value":"http://127.0.0.1:8003"},{"name":"AUTHPROXYURL","value":"http://127.0.0.1:8001"},{"name":"ADMINURL","value":"http://127.0.0.1:8004"},{"name":"GCAMURL","value":"http://127.0.0.1:8007"},{"name":"APIGATEWAY","value":"http://127.0.0.1:8000"},{"name":"SYSTEMCREDENTIALMANAGERURL","value":"http://127.0.0.1:8005"}
            ,{"name":"SYSTEMENTRYURL","value":"http://127.0.0.1:8010"}
            ,{"name":"TESTURL","value":"http://testapp0.local:8011"}
            ,{"name":"TEST2URL","value":"http://testapp0.local:8012"}
            ],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "testapp"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/testapp",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },        
        {
            "name": "authproxy-1197",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-testapp-1197-authproxy:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8001",
                    "protocol": "tcp",
                    "hostPort": "8001"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@127.0.0.1:27017/testapp_1197?authSource=admin"},{"name":"MONGO_DOMAIN","value":"127.0.0.1"},{"name":"GCAMURL","value":"http://127.0.0.1:8007"},{"name":"APIGATEWAY","value":"http://127.0.0.1:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "testapp"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/testapp",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },
        {
            "name": "vault-1197",
            "image": "vault:latest",
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8200",
                    "protocol": "tcp",
                    "hostPort": "8200"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@127.0.0.1:27017/testapp_1197?authSource=admin"},{"name":"MONGO_DOMAIN","value":"127.0.0.1"},{"name":"GCAMURL","value":"http://127.0.0.1:8007"},{"name":"VAULT_SERVER","value":"http://127.0.0.1:8200"},{"name":"VAULT_DEV_ROOT_TOKEN_ID","value":"vault-geppetto-2021"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "testapp"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/testapp",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },
        {
            "name": "gcam-1197",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-testapp-1197-gcam:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8007",
                    "protocol": "tcp",
                    "hostPort": "8007"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@127.0.0.1:27017/testapp_1197?authSource=admin"},{"name":"MONGO_DOMAIN","value":"127.0.0.1"},{"name":"SECURITYURL","value":"http://127.0.0.1:8003"},{"name":"AUTHPROXYURL","value":"http://127.0.0.1:8001"},{"name":"ADMINURL","value":"http://127.0.0.1:8004"},{"name":"GCAMURL","value":"http://127.0.0.1:8007"},{"name":"APIGATEWAY","value":"http://127.0.0.1:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "testapp"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/testapp",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },
        {
            "name": "gepfilemanager-1197",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-testapp-1197-gepfilemanager:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "3015",
                    "protocol": "tcp",
                    "hostPort": "3015"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@127.0.0.1:27017/testapp_1197?authSource=admin"},{"name":"MONGO_DOMAIN","value":"127.0.0.1"},{"name":"SECURITYURL","value":"http://127.0.0.1:8003"},{"name":"AUTHPROXYURL","value":"http://127.0.0.1:8001"},{"name":"ADMINURL","value":"http://127.0.0.1:8004"},{"name":"GCAMURL","value":"http://127.0.0.1:8007"},{"name":"APIGATEWAY","value":"http://127.0.0.1:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "testapp"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/testapp",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },
        {
            "name": "securitymanager-1197",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-testapp-1197-securitymanager:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8003",
                    "protocol": "tcp",
                    "hostPort": "8003"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@127.0.0.1:27017/testapp_1197?authSource=admin"},{"name":"MONGO_DOMAIN","value":"127.0.0.1"},{"name":"SECURITYURL","value":"http://127.0.0.1:8003"},{"name":"AUTHPROXYURL","value":"http://127.0.0.1:8001"},{"name":"ADMINURL","value":"http://127.0.0.1:8004"},{"name":"GCAMURL","value":"http://127.0.0.1:8007"},{"name":"APIGATEWAY","value":"http://127.0.0.1:8000"}
            ,{"name":"SYSTEMENTRYURL","value":"http://127.0.0.1:8010"}
            ],
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "testapp"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/testapp",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },
        {
            "name": "systemcredentialmanager-1197",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-testapp-1197-systemcredentialmanager:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8005",
                    "protocol": "tcp",
                    "hostPort": "8005"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@127.0.0.1:27017/testapp_1197?authSource=admin"},{"name":"MONGO_DOMAIN","value":"127.0.0.1"},{"name":"SECURITYURL","value":"http://127.0.0.1:8003"},{"name":"AUTHPROXYURL","value":"http://127.0.0.1:8001"},{"name":"ADMINURL","value":"http://127.0.0.1:8004"},{"name":"GCAMURL","value":"http://127.0.0.1:8007"},{"name":"APIGATEWAY","value":"http://127.0.0.1:8000"},{"name":"VAULT_URL","value":"http://127.0.0.1:8200"},{"name":"VAULT_TOKEN","value":"vault-geppetto-2021"}],
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "testapp"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/testapp",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },
        {
            "name": "systementry-1197",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-testapp-1197-systementry:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8010",
                    "protocol": "tcp",
                    "hostPort": "8010"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@127.0.0.1:27017/testapp_1197?authSource=admin"},{"name":"MONGO_DOMAIN","value":"127.0.0.1"},{"name":"SECURITYURL","value":"http://127.0.0.1:8003"},{"name":"AUTHPROXYURL","value":"http://127.0.0.1:8001"},{"name":"ADMINURL","value":"http://127.0.0.1:8004"},{"name":"GCAMURL","value":"http://127.0.0.1:8007"},{"name":"APIGATEWAY","value":"http://127.0.0.1:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "testapp"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/testapp",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
    ],
    "volumes": [
        {
        "fsxWindowsFileServerVolumeConfiguration": null,
        "efsVolumeConfiguration": {
            "transitEncryptionPort": null,
            "fileSystemId": `${process.env.EFS_ID}`,
            "authorizationConfig": {
            "iam": "DISABLED",
            "accessPointId": null
            },
            "transitEncryption": "DISABLED",
            "rootDirectory": "/"
        },
        "name": "testapp",
        "host": null,
        "dockerVolumeConfiguration": null
        }
    ],
    "networkMode": "awsvpc",
    "memory": "4096",
    "cpu": "1024",
    "executionRoleArn": `arn:aws:iam::${process.env.AWS_ACCOUNT_ID}:role/${process.env.AWS_ROLE_FOR_FARGATE}`,
    "family": "testapp",
    "tags": [],
    "placementConstraints": [],
    "taskRoleArn": `arn:aws:iam::${process.env.AWS_ACCOUNT_ID}:role/${process.env.AWS_ROLE_FOR_FARGATE}`

};
var ConfigurationJSON = JSON.stringify(module.exports);
const config = module.exports;

const jsonConfig = JSON.parse(JSON.stringify(ConfigurationJSON))

console.log(jsonConfig)
