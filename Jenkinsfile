def builderImage
def imageName = "wsaefulloh/coba_backend_ankasa:devs"

pipeline {
    agent any

    stages {
        // stage('Installing package') {
        //     steps {
        //         nodejs("node14"){
        //             sh 'yarn install'
        //         }
        //     }
        // }

        // stage('Running Test') {
        //     steps {
        //         nodejs("node14"){
        //             sh 'yarn run test'
        //         }
        //     }
        // }

        // stage('Build Image') {
        //     steps {
        //         script{
        //             builderImage = docker.build("${imageName}")
        //         }
        //     }
        // }

        // stage('Test Image') {
        //     steps {
        //         script{
        //             builderImage.inside {
        //                 sh "echo 'pass'"
        //             }
        //         }
        //     }
        // }

        // stage('Push Image') {
        //     steps {
        //         script{
        //             builderImage.push()
        //         }
        //         sh "docker image prune -f"
        //     }
        // }

        stage('Deployment') {
            steps {
                script {
                    sshPublisher(
                        publishers: [
                            sshPublisherDesc(
                                configName: 'devops',
                                verbose: false,
                                transfers: [
                                    sshTransfer(
                                        sourcefiles: "backendv2.yml",
                                        execCommand: "cd /home/devops/deploy; sudo kubectl apply -f backendv2.yml",
                                        execTimeout: 120000,
                                    )
                                ]
                            )
                        ]
                    )
                }
            }
        }

        // stage('Deployment') {
        //     steps {
        //         sh "docker-compose up -d"
        //     }
        // }

    }
}