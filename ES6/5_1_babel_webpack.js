// 일단 create-react-app 유틸리티를 통해 미리 세팅된 babel/webpack을 활용

// babal의 역할은 상위버전의 js코드를 하위버전으로 변형시켜준다.
// ES6,7,8,9,10 이상 의 코드를 ES5로 바꿔준다.

// webpack (module bundler)는 js, jsx, css, sass(css슈퍼셋), less(css다른계통언어), ES6, 이미지, html, 폰트 등 거의 모든 것을
// 모듈로 만들어 주고 하나의 파일(bundle)로 묶을 수 있다.
// 모듈성과 네트워크 성능이 향상된다.

// Features
// 코드가 필요할 때, 로딩 가능
// minifying기능 추가 가능 : 불필요한 코드, 공백/줄바꿈, 긴 이름 등을 줄여 파일 크기를 줄인다.
// HMR(hot module replacement) : 매번 새로고침 할 필요없이 개발모드에서 소스가 변경되면 변경된 모듈만 즉시 갱신 가능

// 지원 Loaders
// babel-loader : js코드를 transpiling(특정언어로 작성된 코드를 다른 언어로 변환)해줌
// css-loader : sass, less등 다른 언어를 transpiling해줌

// 설치할게 존나 많은데 그냥 yarn global add create-react-app한번에 설치 가능

// create-react-app(cra) : react 프로젝트 생성을 도와주는 명령행 도구

// 프로젝트 생성
// yarn create-react-app --help
// yarn create-react-app <프로젝트-디렉토리>
// (안되면 yarn대신 npx)

// TypeScript언어지원이 필요하면
// yarn create-react-app <프로젝트-디렉토리> -- template typescript
