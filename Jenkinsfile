pipline {
  agent any // build agent

  triggers {
    pillSCM('H/5 * * * *') // update ci/cd
  }

  tools {
    nodejs 'node-22'
  }

  stages {
    stage('Lint') {
      steps {
        dir("/") {
          sh "npm i --force" // todo: npm i || npm ci
          sh "npm run lint"
        }
      }

      post {
        success {
          // todo: отправка в сервер с jenkins
        }
      }
    }

    stage('Test') {
      steps {
        dir('/') {
          sh "npm i --force" // todo: npm i || npm ci
          sh "npm run test"
        }
      }

      post {
        success {
          // todo: отправка в сервер с jenkins
        }
      }
    }

    stage('Save artifacts') {
      steps {
        archiveArtifacts(artifacts: 'dist/*')
      }

      post {
        success {
          // todo: отправка в сервер с jenkins
        }
      }
    }
  }
}
