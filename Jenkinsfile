pipeline{
    agent any

    stages{
        stage('Build'){
            steps{
                echo '==> Nos specified build stage'
            }
        }
        stage('Test'){
            steps{
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