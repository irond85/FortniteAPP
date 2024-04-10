pipeline {
    agent any

    stages {
        stage('Build Angular App') {
            steps {
                dir('fortnite-front-app') {
                    script {
                        bat 'npm install'
                        bat 'npm run build'
                    }
                }
            }
        }

        stage('Build Node.js API') {
            steps {
                dir('FortniteAPI') {
                    script {
                        bat 'npm install'
                    }
                }
            }
        }

        stage('Run Docker Compose') {
            steps {
                bat 'docker-compose -f docker-compose.yml up --build -d'
            }
        }

        stage('Run Tests') {
            steps {
                dir('FortniteAPI') {
                    script {
                        bat 'npm test'
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                echo '==> Not specified stage'
            }
        }
    }

    post {
        always {
            bat 'docker-compose -f docker-compose.yml down'
        }
    }
}
