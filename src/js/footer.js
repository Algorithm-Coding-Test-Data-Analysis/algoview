export function footerHTML() {
  return `
        <div class="footer-wrapper-div">
            <div class="footer-logo">
                <img class="logo-img" src="/src/assets/images/ALGOVIEWlogo.png" alt="logo" />
            </div>

            <div class="footer-description">
                <strong class="footer-title"
                >알고리즘 문제풀이 분석 오픈소스 프로젝트 입니다 :)</strong
                >
                <p>
                이 자료는 많은 개발자의 도움으로 만들어졌습니다. 누구나 허락없이
                사용할 수 있는 공공재입니다.
                </p>
                <p>ALGOVIEW. ©2023. All Rights Reserved.</p>
            </div>

            <div class="footer-link-wrapper">
                <a
                class="footer-github-link"
                href="https://github.com/Algorithm-Coding-Test-Data-Analysis/algoview.git"
                >
                <img
                    class="footer-img-github"
                    src="/src/assets/images/github.png"
                    alt="algoview-link"
                />
                <span class="footer-github-txt">GitHub</span>
                </a>
            </div>
        <div>
    `;
}
