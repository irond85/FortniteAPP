pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/irond85/FortniteApp'
            }
        }

        stage('Build Angular App') {
            steps {
                dir('fortnite-front-app') {
                    script {
                        sh 'npm install'
                        sh 'npm run build'
                    }
                }
            }
        }

        stage('Build Node.js API') {
            steps {
                dir('FortniteAPI') {
                    script {
                        sh 'npm install'
                    }
                }
            }
        }

        stage('Run Docker Compose') {
            steps {
                sh 'docker-compose -f docker-compose.yml up --build -d'
            }
        }

        stage('Run Tests') {
            steps {
                dir('FortniteAPI') {
                    script {
                        sh 'npm test'
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                // Agrega aquí los comandos necesarios para implementar tu aplicación
            }
        }
    }

    post {
        always {
            sh 'docker-compose -f docker-compose.yml down'
        }
    }
}
