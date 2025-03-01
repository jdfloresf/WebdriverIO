pipeline {
    agent any
    
    stages {
        stage('Checkout Código') {
            steps {
                git branch: 'amazon', url: 'https://github.com/jdfloresf/WebdriverIO.git'
            }
        }

        stage('Instalar Dependencias') {
            steps {
                bat 'npm install'
            }
        }

        stage('Ejecutar Pruebas') {
            steps {
                bat 'set user=%BROWSERSTACK_USERNAME% && set key=%BROWSERSTACK_ACCESS_KEY% && npx wdio'
            }
        }

        stage('Generar Reporte') {
            steps {
                bat 'npx allure generate allure-results && npx allure open'
            }
        }
    }

    post {
        always {
            script {
                echo "📌 Guardando reportes de Allure..."
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
