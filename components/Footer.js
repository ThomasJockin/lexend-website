import styled from "@emotion/styled";

const Footer = styled('footer')`
  padding: 1.618rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  p {
    font-size: 0.718rem;
    margin: 0;
    padding: 0;
    a {
      font-size: 0.8em;
    }
  }
  svg {
    opacity: 0.7;
    max-height: 2.392rem;
  }
`

export default () => {
  return (
    <Footer>
      <FriendsOfGoogle/>
      <p>
        Type design by the talented <a href="http://thomasjockin.com/" target="_blank">Thomas Jockin</a>, with contributions from Sherlock Holmes, Dr. John H. Watson, and Santa Claus. Site design & development by <a href="https://micahrich.com/" target="_blank">Micah Rich</a>.
      </p>
    </Footer>
  )
}

const FriendsOfGoogle = () => (
  <div>
  <svg id="google-logo" viewBox="0 0 133 42" width="100%" height="100%">
      <title>Made by friends of Google Fonts</title>
      <g transform="translate(.063 .496)">
        <polygon points="80.18 34.976 80.18 18.632 89.706 18.632 89.706 20.687 82.234 20.687 82.234 26.057 88.959 26.057 88.959 28.018 82.234 28.018 82.234 35.023 80.18 35.023"></polygon>
        <path d="M102.314098 29.4193892C102.314098 32.8283026 99.885831 35.3499645 96.5703125 35.3499645 93.1613991 35.3499645 90.826527 32.8283026 90.826527 29.4193892 90.826527 26.0104759 93.254794 23.4888139 96.5703125 23.4888139 99.8391335 23.395419 102.314098 26.0104759 102.314098 29.4193892zM100.166016 29.4193892C100.166016 26.8977273 98.3915128 25.3100142 96.4769176 25.3100142 94.515625 25.3100142 92.7878196 26.7576349 92.7878196 29.4193892 92.7878196 31.9410511 94.5623224 33.5287642 96.4769176 33.5287642 98.3915128 33.5287642 100.166016 31.9877486 100.166016 29.4193892zM106.096591 25.3567116C106.797053 24.2826705 108.244673 23.395419 109.692294 23.395419 112.494141 23.395419 113.988459 25.3567116 113.988459 28.0651634L113.988459 34.9763849 111.933771 34.9763849 111.933771 28.4854403C111.933771 26.1505682 110.766335 25.3567116 109.22532 25.3567116 107.357422 25.3567116 106.283381 27.1312145 106.283381 28.8590199L106.283381 35.0697798 104.135298 35.0697798 104.135298 23.815696 106.189986 23.815696 106.096591 25.3567116zM117.303977 31.5674716L117.303977 25.7302912 115.342685 25.7302912 115.342685 23.815696 117.303977 23.815696 117.303977 20.4067827 119.45206 20.4067827 119.45206 23.815696 122.160511 23.815696 122.160511 25.7769886 119.45206 25.7769886 119.45206 31.5207741C119.45206 32.7816051 119.919034 33.3886719 120.993075 33.3886719 121.366655 33.3886719 121.693537 33.3886719 121.973722 33.2018821L122.767578 35.0697798C122.300604 35.2565696 121.786932 35.3499645 121.133168 35.3499645 118.564808 35.1631747 117.303977 33.9023438 117.303977 31.5674716zM123.047763 32.1745384L124.915661 31.3806818C125.522727 32.8283026 126.550071 33.5287642 127.950994 33.5287642 129.211825 33.5287642 130.192472 32.8283026 130.192472 31.9877486 130.192472 31.3806818 129.818892 30.8203125 128.651456 30.5401278L126.409979 29.9330611C125.335938 29.6528764 123.374645 28.765625 123.374645 26.8043324 123.374645 24.7496449 125.522727 23.4888139 127.857599 23.4888139 129.818892 23.4888139 131.453303 24.3760653 132.153764 26.1038707L130.285866 26.8977273C129.912287 25.8236861 128.838246 25.4501065 127.764205 25.4501065 126.596768 25.4501065 125.522727 25.917081 125.522727 26.8977273 125.522727 27.5981889 126.129794 27.9717685 126.970348 28.1585582L129.211825 28.6255327C131.453303 29.0925071 132.340554 30.5868253 132.340554 31.9410511 132.340554 33.9023438 130.566051 35.4433594 127.950994 35.4433594 125.242543 35.3966619 123.701527 33.8089489 123.047763 32.1745384zM.0933948864 26.0104759C.0933948864 20.8737571 4.48295455 16.6709872 9.6196733 16.6709872 12.4215199 16.6709872 14.4762074 17.8384233 16.0639205 19.286044L14.1960227 21.1539418C13.1219815 20.0799006 11.5809659 19.286044 9.52627841 19.286044 5.74378551 19.3327415 2.80184659 22.3213778 2.80184659 26.1505682 2.80184659 29.9797585 5.74378551 32.9683949 9.52627841 32.9683949 11.9545455 32.9683949 13.4021662 31.9877486 14.2894176 31.1004972 15.0832741 30.3066406 15.4568537 29.3259943 15.6436435 27.8783736L9.6196733 27.8783736 9.6196733 25.3567116 18.2587003 25.3567116C18.3520952 25.8236861 18.3520952 26.337358 18.3520952 26.8977273 18.3520952 28.8590199 17.8851207 31.193892 16.1106179 32.9216974 14.4762074 34.6962003 12.328125 35.5367543 9.57297585 35.5367543 4.48295455 35.3966619.0933948864 31.193892.0933948864 26.0104759zM25.4034091 23.3020241C22.0878906 23.3020241 19.3794389 25.8236861 19.3794389 29.3259943 19.3794389 32.8283026 22.0878906 35.3499645 25.4034091 35.3499645 28.7189276 35.3499645 31.4273793 32.8283026 31.4273793 29.3259943 31.4273793 25.8236861 28.7189276 23.3020241 25.4034091 23.3020241zM25.4034091 33.0617898C23.5355114 33.0617898 21.9944957 31.5207741 21.9944957 29.3726918 21.9944957 27.2246094 23.5355114 25.6835938 25.4034091 25.6835938 27.2713068 25.6835938 28.8123224 27.1312145 28.8123224 29.3726918 28.8123224 31.4740767 27.2713068 33.0617898 25.4034091 33.0617898zM38.6187855 23.3020241C35.303267 23.3020241 32.5948153 25.8236861 32.5948153 29.3259943 32.5948153 32.8283026 35.303267 35.3499645 38.6187855 35.3499645 41.934304 35.3499645 44.6427557 32.8283026 44.6427557 29.3259943 44.6427557 25.8236861 41.934304 23.3020241 38.6187855 23.3020241zM38.6187855 33.0617898C36.7508878 33.0617898 35.2098722 31.5207741 35.2098722 29.3726918 35.2098722 27.2246094 36.7508878 25.6835938 38.6187855 25.6835938 40.4866832 25.6835938 42.0276989 27.1312145 42.0276989 29.3726918 42.0276989 31.4740767 40.4866832 33.0617898 38.6187855 33.0617898zM54.9161932 23.6756037L54.9161932 24.65625 54.8227983 24.65625C54.2157315 23.9557884 53.0482955 23.3020241 51.6006747 23.3020241 48.5653409 23.3020241 45.7634943 25.917081 45.7634943 29.3259943 45.7634943 32.7349077 48.471946 35.3499645 51.6006747 35.3499645 53.0482955 35.3499645 54.2157315 34.6495028 54.8227983 33.9957386L54.9161932 33.9957386 54.9161932 34.8829901C54.9161932 37.2178622 53.6553622 38.3852983 51.6940696 38.3852983 50.0596591 38.3852983 49.0790128 37.2178622 48.6587358 36.2372159L46.3238636 37.2178622C47.0243253 38.7588778 48.7521307 40.8135653 51.6940696 40.8135653 54.8227983 40.8135653 57.4378551 38.9456676 57.4378551 34.5094105L57.4378551 23.6756037 54.9161932 23.6756037zM51.8808594 33.0617898C50.0129616 33.0617898 48.471946 31.5207741 48.471946 29.4660866 48.471946 27.3180043 50.0129616 25.7769886 51.8808594 25.7769886 53.7487571 25.7769886 55.102983 27.3180043 55.102983 29.4660866 55.102983 31.4740767 53.6086648 33.0617898 51.8808594 33.0617898z"></path>
        <rect width="2.615" height="17.792" x="59.259" y="17.278"></rect>
        <path d="M69.2056108,33.0617898 C67.8513849,33.0617898 66.8707386,32.454723 66.2636719,31.193892 L74.3423295,27.8783736 L74.0621449,27.1779119 C73.5951705,25.8236861 72.0074574,23.3020241 68.9254261,23.3020241 C65.8433949,23.3020241 63.1816406,25.7302912 63.1816406,29.3259943 C63.1816406,32.7349077 65.7033026,35.3499645 69.2056108,35.3499645 C71.9140625,35.3499645 73.5951705,33.715554 74.2489347,32.6415128 L72.1942472,31.2872869 C71.540483,32.3613281 70.5598366,33.0617898 69.2056108,33.0617898 Z M69.018821,25.6368963 C70.0928622,25.6368963 70.9801136,26.1038707 71.2602983,26.8977273 L65.7966974,29.1392045 C65.7966974,26.8043324 67.6645952,25.6368963 69.018821,25.6368963 Z"></path>
        <polygon points=".887 .14 2.241 .14 4.857 4.903 4.95 4.903 7.658 .14 8.919 .14 8.919 8.499 7.658 8.499 7.658 3.923 7.752 2.568 7.658 2.568 5.324 6.771 4.576 6.771 2.148 2.568 2.055 2.568 2.148 3.923 2.148 8.499 .887 8.499"></polygon>
        <path d="M13.9158381 7.84517045C13.7290483 8.03196023 13.4488636 8.21875 13.1219815 8.45223722 12.8417969 8.63902699 12.5149148 8.73242188 12.0479403 8.73242188 11.7677557 8.73242188 11.4408736 8.73242188 11.1606889 8.63902699 10.8805043 8.5456321 10.6937145 8.45223722 10.4602273 8.26544744 10.2734375 8.07865767 10.0866477 7.8918679 9.99325284 7.65838068 9.89985795 7.47159091 9.80646307 7.19140625 9.80646307 6.86452415 9.80646307 6.58433949 9.89985795 6.25745739 9.99325284 6.07066761 10.0866477 5.88387784 10.2734375 5.60369318 10.4602273 5.46360085 10.647017 5.27681108 10.9272017 5.18341619 11.2540838 5.09002131 11.5809659 4.99662642 11.8611506 4.99662642 12.2347301 4.99662642 12.6083097 4.99662642 12.9351918 4.99662642 13.2153764 5.09002131 13.4955611 5.18341619 13.6823509 5.18341619 13.8224432 5.27681108L13.8224432 4.90323153C13.8224432 4.71644176 13.8224432 4.62304688 13.7290483 4.4362571 13.6356534 4.24946733 13.6356534 4.15607244 13.5422585 4.06267756 13.4488636 3.96928267 13.2620739 3.87588778 13.168679 3.7824929 13.0752841 3.68909801 12.8884943 3.68909801 12.7017045 3.68909801 12.4215199 3.68909801 12.0946378 3.7824929 11.907848 3.87588778 11.7210582 3.96928267 11.5342685 4.15607244 11.3007812 4.48295455L10.2267401 3.73579545C10.5069247 3.36221591 10.8338068 3.03533381 11.2073864 2.84854403 11.5809659 2.66175426 12.0946378 2.56835937 12.5616122 2.56835937 13.4488636 2.56835937 14.009233 2.75514915 14.5229048 3.17542614 15.0365767 3.59570312 15.2233665 4.15607244 15.2233665 4.94992898L15.2233665 8.40553977 13.9625355 8.40553977 13.9625355 7.84517045 13.9158381 7.84517045zM13.9158381 6.07066761C13.8224432 5.97727273 13.6356534 5.97727273 13.3087713 5.88387784 13.1219815 5.79048295 12.8417969 5.79048295 12.6083097 5.79048295 12.2347301 5.79048295 11.907848 5.88387784 11.6276634 6.07066761 11.4408736 6.25745739 11.2540838 6.44424716 11.2540838 6.77112926 11.2540838 6.86452415 11.2540838 7.05131392 11.3474787 7.14470881 11.4408736 7.23810369 11.4408736 7.33149858 11.5342685 7.42489347 11.6276634 7.51828835 11.7210582 7.51828835 11.8144531 7.61168324 11.907848 7.61168324 12.0946378 7.70507813 12.1880327 7.70507813 12.3748224 7.70507813 12.5616122 7.70507813 12.7950994 7.61168324 12.9818892 7.51828835 13.168679 7.42489347 13.2620739 7.33149858 13.5422585 7.05131392 13.6356534 6.86452415 13.7290483 6.63103693 13.9158381 6.4909446 13.9158381 6.25745739 13.9158381 6.07066761zM20.7336648 7.75177557C20.546875 8.03196023 20.2666903 8.21875 19.9398082 8.45223722 19.6596236 8.63902699 19.2393466 8.73242188 18.7723722 8.73242188 18.3987926 8.73242188 18.0719105 8.63902699 17.698331 8.5456321 17.4181463 8.35884233 17.0912642 8.17205256 16.8110795 7.84517045 16.5308949 7.5649858 16.3441051 7.23810369 16.2040128 6.86452415 16.1106179 6.4909446 16.017223 6.07066761 16.017223 5.60369318 16.017223 5.13671875 16.1106179 4.71644176 16.2040128 4.34286222 16.2974077 3.96928267 16.5775923 3.64240057 16.8110795 3.36221591 17.0912642 3.08203125 17.4181463 2.89524148 17.698331 2.66175426 17.9785156 2.47496449 18.3987926 2.47496449 18.7723722 2.47496449 19.2393466 2.47496449 19.5662287 2.56835938 19.9398082 2.75514915 20.3133878 2.94193892 20.546875 3.12872869 20.6402699 3.4556108L20.7336648 3.4556108 20.6402699 2.66175426 20.6402699.14009233 21.9011009.14009233 21.9011009 8.49893466 20.6402699 8.49893466 20.6402699 7.70507813 20.7336648 7.70507813 20.7336648 7.75177557zM18.9591619 7.42489347C19.1459517 7.42489347 19.3327415 7.42489347 19.6596236 7.33149858 19.8464134 7.23810369 20.0332031 7.14470881 20.2666903 6.95791903 20.3600852 6.86452415 20.4534801 6.67773438 20.546875 6.35085227 20.6402699 6.1640625 20.6402699 5.88387784 20.6402699 5.55699574 20.6402699 5.23011364 20.6402699 4.94992898 20.546875 4.7631392 20.4534801 4.57634943 20.3600852 4.38955966 20.1732955 4.15607244 19.9865057 3.96928267 19.8931108 3.87588778 19.5662287 3.7824929 19.3794389 3.73579545 19.1926491 3.73579545 18.865767 3.73579545 18.6789773 3.73579545 18.3987926 3.73579545 18.1653054 3.82919034 17.9785156 3.92258523 17.7917259 4.01598011 17.698331 4.20276989 17.698331 4.38955966 17.6049361 4.57634943 17.5115412 4.90323153 17.4181463 5.18341619 17.4181463 5.37020597 17.4181463 5.69708807 17.4181463 5.97727273 17.4181463 6.30415483 17.5115412 6.4909446 17.6049361 6.67773438 17.698331 6.86452415 17.8851207 7.09801136 18.0719105 7.28480114 18.1653054 7.37819602 18.3520952 7.47159091 18.5855824 7.42489347 18.7723722 7.42489347 18.9591619 7.42489347zM28.5321378 7.14470881C28.345348 7.61168324 27.925071 7.93856534 27.4580966 8.21875 26.9911222 8.49893466 26.4774503 8.68572443 25.8236861 8.68572443 25.4501065 8.68572443 25.0298295 8.59232955 24.65625 8.49893466 24.2826705 8.31214489 23.9557884 8.12535511 23.6756037 7.79847301 23.395419 7.51828835 23.2086293 7.19140625 23.0685369 6.8178267 22.975142 6.4909446 22.8817472 6.07066761 22.8817472 5.60369318 22.8817472 5.23011364 22.975142 4.80983665 23.0685369 4.4362571 23.1619318 4.06267756 23.3487216 3.73579545 23.6756037 3.4556108 23.9557884 3.17542614 24.2826705 2.98863636 24.5628551 2.75514915 24.9364347 2.56835938 25.3567116 2.47496449 25.7302912 2.47496449 26.1972656 2.47496449 26.6175426 2.56835938 26.8977273 2.66175426 27.2713068 2.94193892 27.5981889 3.12872869 27.8783736 3.4556108 28.0651634 3.73579545 28.2519531 4.06267756 28.4854403 4.4362571 28.5788352 4.80983665 28.6722301 5.23011364 28.6722301 5.69708807L28.6722301 5.97727273 24.2826705 5.97727273C24.2826705 6.25745739 24.3760653 6.44424716 24.4694602 6.67773437 24.5628551 6.86452415 24.65625 7.05131392 24.8430398 7.14470881 25.0298295 7.23810369 25.1232244 7.33149858 25.3100142 7.42489347 25.496804 7.51828835 25.6835937 7.51828835 25.917081 7.51828835 26.2906605 7.51828835 26.6175426 7.42489347 26.8043324 7.23810369 27.084517 7.05131392 27.2713068 6.86452415 27.4113991 6.53764205L28.5321378 7.14470881zM27.2713068 4.90323153C27.2713068 4.80983665 27.1779119 4.62304688 27.1779119 4.52965199 27.084517 4.4362571 26.9911222 4.24946733 26.8977273 4.15607244 26.8043324 4.06267756 26.7109375 3.96928267 26.5241477 3.87588778 26.2906605 3.73579545 26.1038707 3.73579545 25.7769886 3.73579545 25.4034091 3.73579545 25.076527 3.82919034 24.7963423 4.01598011 24.5161577 4.20276989 24.3293679 4.48295455 24.1892756 4.90323153L27.2713068 4.90323153zM32.1278409.14009233L33.3886719.14009233 33.3886719 2.75514915 33.295277 3.54900568 33.3886719 3.54900568C33.5754616 3.26882102 33.7622514 3.08203125 34.0891335 2.84854403 34.3693182 2.66175426 34.7895952 2.56835938 35.2565696 2.56835938 35.6301491 2.56835938 35.9570312 2.66175426 36.3306108 2.75514915 36.7041903 2.94193892 37.0310724 3.12872869 37.2178622 3.4556108 37.4980469 3.73579545 37.6848366 4.06267756 37.824929 4.4362571 38.0117188 4.80983665 38.0117188 5.23011364 38.0117188 5.69708807 38.0117188 6.1640625 38.0117188 6.4909446 37.824929 6.86452415 37.6381392 7.23810369 37.4513494 7.5649858 37.2178622 7.84517045 36.9376776 8.12535511 36.6107955 8.31214489 36.3306108 8.5456321 36.0504261 8.73242188 35.6301491 8.73242188 35.2565696 8.73242188 34.7895952 8.73242188 34.4627131 8.63902699 34.0891335 8.45223722 33.8089489 8.26544744 33.4820668 8.07865767 33.3886719 7.75177557L33.295277 7.75177557 33.295277 8.5456321 32.1278409 8.5456321 32.1278409.14009233zM35.0230824 7.42489347C35.2098722 7.42489347 35.3966619 7.42489347 35.723544 7.33149858 35.9103338 7.23810369 36.0971236 7.14470881 36.3306108 6.95791903 36.5174006 6.77112926 36.6107955 6.58433949 36.7041903 6.35085227 36.7975852 6.1640625 36.7975852 5.88387784 36.7975852 5.55699574 36.7975852 5.23011364 36.7975852 4.94992898 36.7041903 4.7631392 36.6107955 4.57634943 36.5174006 4.38955966 36.3306108 4.15607244 36.0504261 4.06267756 35.9570312 3.96928267 35.723544 3.87588778 35.4900568 3.7824929 35.3499645 3.7824929 35.0230824 3.7824929 34.8362926 3.7824929 34.556108 3.7824929 34.3226207 3.87588778 34.0891335 3.96928267 33.9490412 4.06267756 33.8556463 4.24946733 33.6688565 4.4362571 33.5754616 4.62304688 33.4820668 4.85653409 33.3886719 5.04332386 33.3886719 5.32350852 33.3886719 5.65039063 33.3886719 5.93057528 33.3886719 6.25745739 33.4820668 6.44424716 33.5754616 6.63103693 33.6688565 6.8178267 33.8556463 7.05131392 34.0424361 7.23810369 34.135831 7.33149858 34.3226207 7.42489347 34.556108 7.42489347 34.8362926 7.42489347 35.0230824 7.42489347z"></path>
        <polygon points="40.58 8.219 38.245 2.849 39.693 2.849 41.234 6.631 41.327 6.631 42.868 2.849 44.363 2.849 40.767 11.114 39.413 11.114"></polygon>
        <path d="M49.9195668.0466974432C50.1063565.0466974432 50.2931463.0466974432 50.5266335.14009233 50.7134233.14009233 50.8068182.233487216 50.993608.326882102L50.6200284 1.4009233C50.5266335 1.4009233 50.4332386 1.30752841 50.3398438 1.30752841 50.2464489 1.30752841 50.153054 1.30752841 49.9662642 1.30752841 49.7794744 1.30752841 49.5926847 1.4009233 49.3591974 1.49431818 49.1724077 1.58771307 49.1724077 1.86789773 49.1724077 2.19477983L49.1724077 2.80184659 50.6200284 2.80184659 50.6200284 3.96928267 49.1724077 3.96928267 49.1724077 8.5456321 47.9115767 8.5456321 47.9115767 3.96928267 46.8375355 3.96928267 46.8375355 2.80184659 47.9115767 2.80184659 47.9115767 2.10138494C47.9115767 1.82120028 48.0049716 1.49431818 48.0983665 1.21413352 48.1917614.933948864 48.2851562.747159091 48.471946.513671875 48.6587358.280184659 48.8455256.233487216 49.1724077.14009233 49.4525923.0466974432 49.6393821.0466974432 49.9195668.0466974432zM51.6940696 2.75514915L52.9549006 2.75514915 52.9549006 3.64240057 53.0482955 3.64240057C53.1416903 3.4556108 53.2350852 3.36221591 53.3284801 3.26882102 53.421875 3.17542614 53.5152699 2.98863636 53.7020597 2.89524148 53.8888494 2.80184659 53.9822443 2.7084517 54.1690341 2.7084517 54.3558239 2.61505682 54.4492188 2.61505682 54.6360085 2.61505682 54.8227983 2.61505682 55.0095881 2.61505682 55.102983 2.7084517 55.1963778 2.7084517 55.3831676 2.80184659 55.4765625 2.80184659L55.102983 3.96928267C55.0095881 3.96928267 54.9161932 3.87588778 54.8227983 3.87588778 54.7294034 3.87588778 54.6360085 3.87588778 54.4492188 3.87588778 54.262429 3.87588778 54.0756392 3.87588778 53.842152 3.96928267 53.6553622 4.06267756 53.5619673 4.15607244 53.3751776 4.34286222 53.2817827 4.52965199 53.1883878 4.62304688 53.0949929 4.80983665 53.001598 4.99662642 53.001598 5.18341619 53.001598 5.5102983L53.001598 8.5456321 51.740767 8.5456321 51.740767 2.75514915 51.6940696 2.75514915zM56.9241832 1.77450284C56.6439986 1.77450284 56.4572088 1.68110795 56.3171165 1.49431818 56.1770241 1.30752841 56.0369318 1.12073864 56.0369318.88725142 56.0369318.653764205 56.1303267.420276989 56.3171165.280184659 56.5039062.0933948864 56.690696-3.55271368e-15 56.9241832-3.55271368e-15 57.1576705-3.55271368e-15 57.3911577.0933948864 57.53125.280184659 57.7180398.466974432 57.8114347.653764205 57.8114347.88725142 57.8114347 1.12073864 57.7180398 1.35422585 57.53125 1.49431818 57.3444602 1.58771307 57.2510653 1.77450284 56.9241832 1.77450284zM56.3638139 8.49893466L56.3638139 2.75514915 57.6246449 2.75514915 57.6246449 8.49893466 56.3638139 8.49893466zM64.2556818 7.14470881C64.068892 7.61168324 63.6486151 7.93856534 63.1816406 8.21875 62.7146662 8.49893466 62.2009943 8.68572443 61.5472301 8.68572443 61.1736506 8.68572443 60.7533736 8.59232955 60.379794 8.49893466 60.0062145 8.31214489 59.6793324 8.12535511 59.3991477 7.79847301 59.1189631 7.51828835 58.9321733 7.19140625 58.792081 6.8178267 58.6986861 6.44424716 58.6052912 6.02397017 58.6052912 5.55699574 58.6052912 5.18341619 58.6986861 4.7631392 58.792081 4.38955966 58.8854759 4.01598011 59.0722656 3.68909801 59.3991477 3.40891335 59.6793324 3.22212358 60.0062145 2.94193892 60.379794 2.80184659 60.7533736 2.61505682 61.1736506 2.52166193 61.5472301 2.52166193 62.0142045 2.52166193 62.4344815 2.61505682 62.7146662 2.7084517 63.0882457 2.89524148 63.4151278 3.08203125 63.6019176 3.31551847 63.7887074 3.59570312 63.9754972 3.92258523 64.2089844 4.29616477 64.3023793 4.66974432 64.3957741 5.09002131 64.3957741 5.55699574L64.3957741 5.8371804 60.0062145 5.8371804C60.0062145 6.11736506 60.0996094 6.30415483 60.1930043 6.53764205 60.2863991 6.8178267 60.379794 6.91122159 60.5665838 7.14470881 60.7533736 7.23810369 60.8467685 7.33149858 61.0335582 7.42489347 61.220348 7.51828835 61.4071378 7.51828835 61.640625 7.51828835 62.0142045 7.51828835 62.3410866 7.42489347 62.5278764 7.23810369 62.7146662 7.05131392 62.9948509 6.86452415 63.1349432 6.53764205L64.2556818 7.14470881zM63.0882457 4.90323153C63.0882457 4.80983665 62.9948509 4.62304688 62.9948509 4.52965199 62.901456 4.4362571 62.8080611 4.24946733 62.7146662 4.15607244 62.6212713 4.06267756 62.4344815 3.96928267 62.2476918 3.87588778 62.060902 3.7824929 61.8741122 3.7824929 61.5472301 3.7824929 61.1736506 3.7824929 60.8467685 3.87588778 60.5665838 4.06267756 60.2863991 4.24946733 60.0996094 4.52965199 59.959517 4.94992898L63.0882457 4.94992898 63.0882457 4.90323153zM66.590554 3.54900568C66.7773437 3.26882102 67.0575284 3.08203125 67.3844105 2.84854403 67.6645952 2.66175426 68.0848722 2.56835937 68.4584517 2.56835937 69.1589134 2.56835937 69.7192827 2.75514915 70.0928622 3.26882102 70.4664418 3.64240057 70.699929 4.24946733 70.699929 5.04332386L70.699929 8.5456321 69.439098 8.5456321 69.439098 5.13671875C69.439098 4.66974432 69.3457031 4.24946733 69.0655185 4.06267756 68.8787287 3.87588778 68.598544 3.7824929 68.178267 3.7824929 67.9914773 3.7824929 67.8046875 3.7824929 67.5712003 3.87588778 67.3844105 3.96928267 67.2910156 4.06267756 67.1042259 4.24946733 67.010831 4.4362571 66.9174361 4.62304688 66.8240412 4.85653409 66.7306463 5.04332386 66.7306463 5.23011364 66.7306463 5.55699574L66.7306463 8.59232955 65.4698153 8.59232955 65.4698153 2.75514915 66.7306463 2.75514915 66.7306463 3.54900568 66.590554 3.54900568zM76.2102273 7.75177557C76.0234375 8.03196023 75.7432528 8.21875 75.4163707 8.45223722 75.1361861 8.63902699 74.7159091 8.73242188 74.2489347 8.73242188 73.8753551 8.73242188 73.548473 8.63902699 73.1748935 8.5456321 72.8947088 8.35884233 72.5678267 8.17205256 72.287642 7.84517045 72.0074574 7.51828835 71.8206676 7.23810369 71.6805753 6.86452415 71.4937855 6.4909446 71.4937855 6.07066761 71.4937855 5.60369318 71.4937855 5.13671875 71.5871804 4.71644176 71.6805753 4.34286222 71.8673651 3.96928267 72.0541548 3.64240057 72.287642 3.36221591 72.5678267 3.08203125 72.8947088 2.89524148 73.1748935 2.66175426 73.4550781 2.47496449 73.8753551 2.47496449 74.2489347 2.47496449 74.7159091 2.47496449 75.0427912 2.56835938 75.4163707 2.75514915 75.7899503 2.94193892 76.0234375 3.12872869 76.1168324 3.4556108L76.2102273 3.4556108 76.1168324 2.66175426 76.1168324.14009233 77.3776634.14009233 77.3776634 8.49893466 76.1168324 8.49893466 76.1168324 7.70507813 76.2102273 7.70507813 76.2102273 7.75177557zM74.4357244 7.42489347C74.6225142 7.42489347 74.809304 7.42489347 75.1361861 7.33149858 75.3229759 7.23810369 75.5097656 7.14470881 75.7432528 6.95791903 75.8366477 6.86452415 75.9300426 6.67773438 76.0234375 6.35085227 76.1168324 6.1640625 76.1168324 5.88387784 76.1168324 5.55699574 76.1168324 5.23011364 76.1168324 4.94992898 76.0234375 4.7631392 75.9300426 4.57634943 75.8366477 4.38955966 75.649858 4.15607244 75.4630682 3.96928267 75.3696733 3.87588778 75.0427912 3.7824929 74.8560014 3.68909801 74.6692116 3.68909801 74.3423295 3.68909801 74.1555398 3.68909801 73.8753551 3.68909801 73.6418679 3.7824929 73.4550781 3.87588778 73.2682884 3.96928267 73.1748935 4.15607244 73.1748935 4.34286222 72.9881037 4.52965199 72.9881037 4.85653409 72.8947088 5.04332386 72.8947088 5.32350852 72.8947088 5.65039063 72.8947088 5.93057528 72.8947088 6.25745739 72.9881037 6.44424716 72.9881037 6.63103693 73.1748935 6.8178267 73.2682884 6.91122159 73.4550781 7.09801136 73.548473 7.19140625 73.7352628 7.28480114 74.0621449 7.42489347 74.2489347 7.42489347 74.4357244 7.42489347zM80.7865767 8.68572443C80.4129972 8.68572443 80.0861151 8.68572443 79.8059304 8.59232955 79.5257457 8.49893466 79.338956 8.40553977 79.0120739 8.21875 78.8252841 8.03196023 78.6384943 7.93856534 78.5450994 7.75177557 78.4517045 7.5649858 78.2649148 7.37819602 78.2649148 7.14470881L79.4323509 6.67773438C79.6191406 6.86452415 79.8059304 7.14470881 80.0394176 7.37819602 80.3196023 7.5649858 80.506392 7.5649858 80.8332741 7.5649858 81.1601562 7.5649858 81.4403409 7.47159091 81.6271307 7.37819602 81.8139205 7.28480114 81.9073153 7.09801136 81.9073153 6.91122159 81.9073153 6.72443182 81.8139205 6.63103693 81.7205256 6.53764205 81.6271307 6.44424716 81.346946 6.35085227 80.926669 6.25745739L80.1328125 6.07066761C79.9460227 6.07066761 79.759233 5.97727273 79.5257457 5.88387784 79.338956 5.79048295 79.1521662 5.69708807 79.0587713 5.60369318 78.9653764 5.5102983 78.7785866 5.32350852 78.6851918 5.13671875 78.5917969 4.94992898 78.5917969 4.7631392 78.5917969 4.4362571 78.5917969 4.109375 78.6851918 3.96928267 78.7785866 3.64240057 78.8719815 3.4556108 79.0587713 3.26882102 79.2455611 3.03533381 79.4323509 2.84854403 79.7125355 2.75514915 80.0394176 2.75514915 80.3196023 2.66175426 80.6464844 2.66175426 80.926669 2.66175426 81.2068537 2.66175426 81.3936435 2.66175426 81.7205256 2.75514915 81.8139205 2.84854403 82.0007102 2.84854403 82.1875 3.03533381 82.3742898 3.12872869 82.5610795 3.31551847 82.7945668 3.40891335 82.9813565 3.59570313 83.0747514 3.7824929 83.1681463 4.01598011L82.0007102 4.48295455C81.9073153 4.20276989 81.7205256 4.109375 81.5337358 3.87588778 81.346946 3.7824929 81.0667614 3.68909801 80.8332741 3.68909801 80.7398793 3.68909801 80.6464844 3.68909801 80.5530895 3.68909801 80.4596946 3.68909801 80.3662997 3.7824929 80.2729048 3.7824929 80.0861151 3.96928267 79.9927202 3.96928267 79.8993253 4.06267756 79.8059304 4.15607244 79.8993253 4.24946733 79.8993253 4.34286222 79.8993253 4.52965199 79.9927202 4.62304688 80.0861151 4.71644176 80.1795099 4.80983665 80.4596946 4.90323153 80.6931818 4.90323153L81.5804332 5.09002131C82.1875 5.27681108 82.6544744 5.46360085 82.8412642 5.79048295 83.028054 6.07066761 83.2148437 6.4909446 83.2148437 6.86452415 83.2148437 7.14470881 83.1214489 7.33149858 83.028054 7.5649858 82.9346591 7.75177557 82.7478693 7.93856534 82.5610795 8.17205256 82.3742898 8.35884233 82.0941051 8.45223722 81.767223 8.5456321 81.4870384 8.59232955 81.1601562 8.68572443 80.7865767 8.68572443zM89.3322088 2.56835937C89.7057884 2.56835937 90.2194602 2.66175426 90.4996449 2.75514915 90.8732244 2.94193892 91.2001065 3.12872869 91.4802912 3.4556108 91.7604759 3.73579545 91.9472656 4.06267756 92.087358 4.4362571 92.1807528 4.80983665 92.2741477 5.23011364 92.2741477 5.60369318 92.2741477 5.97727273 92.1807528 6.4909446 92.087358 6.77112926 91.9005682 7.14470881 91.7137784 7.47159091 91.4802912 7.75177557 91.2001065 8.03196023 90.8732244 8.21875 90.4996449 8.45223722 90.1260653 8.63902699 89.7057884 8.63902699 89.3322088 8.63902699 88.9586293 8.63902699 88.5383523 8.63902699 88.1647727 8.45223722 87.7911932 8.26544744 87.4643111 8.07865767 87.1841264 7.75177557 86.9039418 7.47159091 86.717152 7.14470881 86.5770597 6.77112926 86.3902699 6.39754972 86.3902699 5.97727273 86.3902699 5.60369318 86.3902699 5.23011364 86.4836648 4.71644176 86.5770597 4.4362571 86.7638494 4.06267756 86.9506392 3.73579545 87.1841264 3.4556108 87.4643111 3.17542614 87.7911932 2.98863636 88.1647727 2.75514915 88.5850497 2.66175426 88.9586293 2.56835937 89.3322088 2.56835937zM89.3322088 7.42489347C89.5189986 7.42489347 89.7057884 7.42489347 89.9392756 7.33149858 90.1260653 7.23810369 90.3128551 7.14470881 90.5463423 6.95791903 90.7331321 6.77112926 90.826527 6.58433949 90.9199219 6.35085227 91.0133168 6.1640625 91.0133168 5.88387784 91.0133168 5.55699574 91.0133168 5.23011364 91.0133168 4.94992898 90.9199219 4.7631392 90.826527 4.57634943 90.7331321 4.38955966 90.5463423 4.15607244 90.3595526 3.96928267 90.2661577 3.87588778 89.9392756 3.7824929 89.7524858 3.68909801 89.565696 3.68909801 89.3322088 3.68909801 89.0987216 3.68909801 88.9586293 3.68909801 88.725142 3.7824929 88.5383523 3.87588778 88.3515625 3.96928267 88.1180753 4.15607244 87.9312855 4.34286222 87.8378906 4.52965199 87.7444957 4.7631392 87.6511009 4.94992898 87.6511009 5.23011364 87.6511009 5.55699574 87.6511009 5.88387784 87.6511009 6.1640625 87.7444957 6.35085227 87.8378906 6.53764205 87.9312855 6.72443182 88.1180753 6.95791903 88.3048651 7.14470881 88.3982599 7.23810369 88.725142 7.33149858 88.9586293 7.42489347 89.145419 7.42489347 89.3322088 7.42489347zM95.8698509.0466974432C96.0566406.0466974432 96.2434304.0466974432 96.4769176.14009233 96.6637074.233487216 96.7571023.233487216 96.943892.326882102L96.5703125 1.49431818C96.4769176 1.49431818 96.3835227 1.4009233 96.2901278 1.4009233 96.196733 1.4009233 96.1033381 1.4009233 95.9165483 1.4009233 95.7297585 1.4009233 95.5429688 1.49431818 95.3094815 1.58771307 95.1226918 1.68110795 95.1226918 1.96129261 95.1226918 2.28817472L95.1226918 2.89524148 96.5703125 2.89524148 96.5703125 3.96928267 95.1226918 3.96928267 95.1226918 8.5456321 93.8618608 8.5456321 93.8618608 3.96928267 92.7878196 3.96928267 92.7878196 2.80184659 93.8618608 2.80184659 93.8618608 2.10138494C93.8618608 1.82120028 93.9552557 1.49431818 94.0486506 1.21413352 94.1420455 1.02734375 94.2354403.747159091 94.4222301.607066761 94.6090199.420276989 94.7958097.326882102 95.1226918.233487216 95.2627841.0466974432 95.5896662.0466974432 95.8698509.0466974432z"></path>
      </g>
  </svg>
  </div>
)
