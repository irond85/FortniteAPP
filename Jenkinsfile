pipeline{
    agent any

    stages{
        stage('Build'){
            steps{
                sh 'npm install'
                echo '==> Nos specified build stage'
            }
        }
        stage('Test'){
            steps{
                sh 'npm test'
                echo '==> Nos specified test stage'
            }
        }
        stage('Deploy'){
            steps{
                sh 'docker-compose down -v'
            }
        }
    }
}