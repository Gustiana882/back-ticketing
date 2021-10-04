def builderImage
def imageName = "wsaefulloh/coba_backend_ankasa:prod"

pipeline {
    agent any

    stages {
        stage('Installing package') {
            steps {
                nodejs("node14"){
                    sh 'yarn install'
                }
            }
        }

        stage('Running Test') {
            steps {
                nodejs("node14"){
                    sh 'yarn run test'
                }
            }
        }

        stage('Build Image') {
            steps {
                script{
                    builderImage = docker.build("${imageName}")
                }
            }
        }

        stage('Test Image') {
            steps {
                script{
                    builderImage.inside {
                        sh "echo 'pass'"
                    }
                }
            }
        }

        stage('Push Image') {
            steps {
                script{
                    builderImage.push()
                }
                sh "docker image prune -f"
            }
        }
        
        stage('production') {
            steps {               
                script {
                    sshPublisher(
                        publishers: [
                            sshPublisherDesc(
                                configName: 'devopsback',
                                verbose: false,
                                transfers: [
                                    sshTransfer(
                                        sourceFiles: "backendv2.yml",
                                        execCommand: "cd /home/devops/backend; sudo kubectl apply -f backendv2.yml",
                                        execTimeout: 120000,
                                    )
                                ]
                            )
                        ]
                    )
                }
            }
        }

        // stage('Running Image') {
        //     steps {
        //         sh "cd /var/lib/jenkins/workspace/'backend' ; docker-compose up -d"
        //         }
        // }

        // stage('Deployment') {
        //     steps {
        //         sh "docker-compose up -d"
        //     }
        // }

    }
}
