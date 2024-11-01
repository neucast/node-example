// pipeline {
//     agent {
//         docker { image 'node:22.11.0-alpine3.20'}
//     }
//     stages {
//         stage('Test') {
//             steps {
//                 sh 'npm install'
//                 sh 'npm test'
//             }
//         }
//         stage('Build') {
//             steps {
//                 sh 'docker images'
//             }
//         }
//         stage('Docker'){
//         }
//     }
// }

// pipeline {
//     agent any
//     stages {
//         stage('Docker') {
//             steps {
//                 script {
//                     sh 'docker images'
//                 }
//             }
//         }
//     }
// }

pipeline {
    agent any
    environment {
        DOCKER_HUB_CREDENTIALS = credentials('docker-hub-credentials')
    }
    stages {
        stage('Testing') {
            steps {
                script {
                    //cualquier sh que vean, en windows es bat
                    sh 'docker build -t imagendepruebas -f Dockerfile.test . && docker run imagendepruebas'
                }
            }
        }
        stage('Build') {
            steps {
                script {
                    //cualquier sh que vean, en windows es bat
                    sh 'docker build -t toony1908/imagendesdejenkinsjs -f Dockerfile.build .'
                }
            }
        }
        stage('Dockerhub login') {
            steps {
                script {
                    //cualquier sh que vean, en windows es bat
                    sh 'echo ${DOCKER_HUB_CREDENTIALS_PSW} | docker login -u ${DOCKER_HUB_CREDENTIALS_USR} --password-stdin'
                }
            }
        }
        stage('Dockerhub push') {
            steps {
                script {
                    //cualquier sh que vean, en windows es bat
                    sh 'docker push toony1908/imagendesdejenkinsjs'
                }
            }
        }
    }
}
