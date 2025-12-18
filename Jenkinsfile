pipeline {
  agent any

  environment {
    DOCKER_IMAGE = "parivedavs/loginpage"
    DOCKER_TAG = "latest"
  }

  stages {

    stage('Checkout Code') {
      steps {
        git branch: 'main',
        url: 'https://github.com/parivedavs/loginpage.git'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Build React App') {
      steps {
        sh 'npm run build'
      }
    }

    stage('Build Docker Image') {
      steps {
        sh 'docker build -t $DOCKER_IMAGE:$DOCKER_TAG .'
      }
    }

    stage('Push Docker Image') {
      steps {
        withCredentials([string(credentialsId: 'Vamshi@1234@', variable: 'PASS')]) {
          sh """
            docker login -u parivedavs -p $PASS
            docker push $DOCKER_IMAGE:$DOCKER_TAG
          """
        }
      }
    }

    stage('Deploy to Kubernetes') {
      steps {
        sh 'kubectl apply -f k8s/deployment.yaml'
        sh 'kubectl apply -f k8s/service.yaml'
      }
    }
  }
}
