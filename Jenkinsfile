pipeline {
    agent any

    environment {
        IMAGE_NAME = "akankshaadz/portfolio"
    }

    stages {

        stage('Clone Repo') {
            steps {
                git 'https://github.com/akankshaadz/portfolio.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    echo '🛠️ Building Docker Image...'
                    sh 'docker build -t $IMAGE_NAME .'
                }
            }
        }

        stage('Run with Docker Compose') {
            steps {
                script {
                    echo '🚀 Deploying using Docker Compose...'
                    sh 'docker-compose down || true'
                    sh 'docker-compose up -d'
                }
            }
        }
    }

    post {
        success {
            echo '✅ Deployment successful!'
        }
        failure {
            echo '❌ Deployment failed!'
        }
    }
}
