# videosApp

Uma aplicação com ionic playlist no youtube [Ronan Adriel Zenatti](https://youtube.com/playlist?list=PLuXkauUmG1ZH7iJfW5GpAKAQTo_NL5PZ7).<br>

## Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:

<li> 
  <a href="https://nodejs.org/en/download/" taget="_blank">Nodejs</a>
</li>
<li> 
  <a href="https://developer.android.com/studio?hl=pt&gclid=Cj0KCQiA4uCcBhDdARIsAH5jyUnsmsX9IN55sxRieBx_FDFo8Ln1NRKb7_oW_Li2c4MwkV-k_GtzKwQaAlewEALw_wcB&gclsrc=aw.ds" taget="_blank">Android Studio</a>
  (<b>Configure as variáveis de ambiente para o SDK do android</b>)
  <ol>
    <li>Crie uma var de sistema chamada: ANDROID_SDK_ROOT</li>
    <li>Coloque o endereço de instalação do SDK -> C:\LOCAL DA INSTALAÇÃO\android_sdk</li>
    <li>Edite a variavel Path das variáveis de sistema e adicone:
        <ul>
          <li>"%ANDROID_SDK_ROOT%\tools"</li>
          <li>"%ANDROID_SDK_ROOT%\platform-tools"</li>
          <li>"%ANDROID_SDK_ROOT%\build-tools\numero da versão"</li>
        </ul>
    </li>
    </ol>
</li>

<li> 
  <a href="https://gradle.org/install/" taget="_blank">Gradle 7.6</a>
  (<b>Configure as variáveis de ambiente</b>)
  <ol>
    <li>Edite a variavel Path das variáveis de sistema e adicone o caminho para a pasta bin, que esta dentro da pasta Gradle.</li>
  </ol>
</li>
<li> 
  <a href="https://www.oracle.com/br/java/technologies/javase/jdk11-archive-downloads.html" taget="_blank">Java SE 11</a>
  (<b>Configure as variáveis de ambiente</b>)
  <ol>
    <li>Edite a variavel Path das variáveis de sistema e adicone o caminho para a pasta bin, que esta dentro da pasta Java.</li>
  </ol>
</li>


## Iniciando 

```bash
# Clone este repositório
$ git clone https://github.com/Cristianpl4y/videosApp

# Acesse a pasta do projeto no terminal/cmd
$ cd videosApp

# Garante que não haja uma versão antiga e desatualizada
$ npm uninstall -g ionic  

# Instalação do ionic
$ npm install -g @ionic/cli cordova cordova-res native-run

# Confira a sua instalação do ionic
$ ionic info

# Instale as dependências
$ npm i

# Execute a aplicação em modo de desenvolvimento
$  ionic serve -l

# O servidor inciará na porta:8200 - acesse <http://localhost:8200>
```

## Exportando a aplicação Ionic para o Android (conectado via USB na maquina)
<p>Atenção o celular deve estar com as configurações de desenvolvedor ativada</p>

```bash
# Para usuários Ionic/Cordova, você precisará instalar o novo pacote.
$ npm install @ionic/cordova-builders  

# rode o comando 
$ ionic cordova prepare android

# Caso de o Erro 
Error: Unknown Argument: Platform [Error] An Error Occurred While Running Subprocess NG.

# Siga o passo a passo
https://stackoverflow.com/questions/72628680/error-unknown-argument-platform-ionic-cordova
https://www.youtube.com/watch?v=VEeDaYbWShQ

# Execute a aplicação 
$  ionic cordova run android

```
