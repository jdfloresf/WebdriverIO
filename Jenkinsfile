pipeline {
    agent any

    environment {
        BROWSERSTACK_USERNAME = credentials('browserstack-user')
        BROWSERSTACK_ACCESS_KEY = credentials('browserstack-key')
    }

    stages {
        stage('Checkout Código') {
            steps {
                git branch: 'amazon', url: 'https://github.com/jdfloresf/WebdriverIO.git'
            }
        }
        
        stage('Instalar Dependencias') {
            steps {
                bat 'npm ci'  // Usa npm ci en lugar de npm install
            }
        }
        
        stage('Ejecutar Pruebas') {
            steps {
                bat 'npx wdio'
            }
        }
        
        stage('Generar Reporte') {
            steps {
                bat 'npx allure generate allure-results --clean'
            }
        }
    }

    post {
        always {
            script {
                echo '📌 Guardando reportes de Allure...'
                archiveArtifacts artifacts: 'allure-results/**', fingerprint: true
            }
        }

        success {
            echo '✅ Pipeline ejecutado con éxito!'
        }
        
        failure {
            echo '❌ Error en el pipeline, revisa los logs.'
        }
    }
}
