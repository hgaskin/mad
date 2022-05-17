/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { Menu, Transition } from '@headlessui/react'
import { DotsVerticalIcon } from '@heroicons/react/outline'

const days = [
  { date: '2021-12-27' },
  { date: '2021-12-28' },
  { date: '2021-12-29' },
  { date: '2021-12-30' },
  { date: '2021-12-31' },
  { date: '2022-01-01', isCurrentMonth: true },
  { date: '2022-01-02', isCurrentMonth: true },
  { date: '2022-01-03', isCurrentMonth: true },
  { date: '2022-01-04', isCurrentMonth: true },
  { date: '2022-01-05', isCurrentMonth: true },
  { date: '2022-01-06', isCurrentMonth: true },
  { date: '2022-01-07', isCurrentMonth: true },
  { date: '2022-01-08', isCurrentMonth: true },
  { date: '2022-01-09', isCurrentMonth: true },
  { date: '2022-01-10', isCurrentMonth: true },
  { date: '2022-01-11', isCurrentMonth: true },
  { date: '2022-01-12', isCurrentMonth: true, isToday: true },
  { date: '2022-01-13', isCurrentMonth: true },
  { date: '2022-01-14', isCurrentMonth: true },
  { date: '2022-01-15', isCurrentMonth: true },
  { date: '2022-01-16', isCurrentMonth: true },
  { date: '2022-01-17', isCurrentMonth: true },
  { date: '2022-01-18', isCurrentMonth: true },
  { date: '2022-01-19', isCurrentMonth: true },
  { date: '2022-01-20', isCurrentMonth: true },
  { date: '2022-01-21', isCurrentMonth: true, isSelected: true },
  { date: '2022-01-22', isCurrentMonth: true },
  { date: '2022-01-23', isCurrentMonth: true },
  { date: '2022-01-24', isCurrentMonth: true },
  { date: '2022-01-25', isCurrentMonth: true },
  { date: '2022-01-26', isCurrentMonth: true },
  { date: '2022-01-27', isCurrentMonth: true },
  { date: '2022-01-28', isCurrentMonth: true },
  { date: '2022-01-29', isCurrentMonth: true },
  { date: '2022-01-30', isCurrentMonth: true },
  { date: '2022-01-31', isCurrentMonth: true },
  { date: '2022-02-01' },
  { date: '2022-02-02' },
  { date: '2022-02-03' },
  { date: '2022-02-04' },
  { date: '2022-02-05' },
  { date: '2022-02-06' },
]
const meetings = [
  {
    id: 1,
    name: 'Leslie Alexander',
    imageUrl:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhUZGRgaHBocHBwcGhocGh4cIRwaGhoeHBweIS4lHB4rIxocJjgnKy80NTU1HiQ7QDs0Py40NTEBDAwMDw8PEA8PEDEdGB0xMTExMTQ0MTExMTExMTQxMTExMTExMTExMTExMTExMTExNDExMTExMTExMTExMTExMf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAGAAMEBQcCAQj/xABIEAACAQIEBAMGAwUECQEJAAABAhEAAwQSITEFBkFRImFxBxMygZGhQrHBUmJy0fAUkrLhFTM0Q2OCosLxIxYkNXN0g7PS4v/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhEDEQA/AMZpUgKkWrNUNpbmpdqxT1qzU23YoIy4epdqxUm1YqUmHoIXuxsapFTKxXpuD5USYlIDDsP86oggZN4ZdvTrNBccGXMHPZgP+kVbph6j8AwrIrBhqSCY1jw6SfvVtiGW2hd9h9z0A86Kg38qLmYwPuT2A6mqpnuXjCAohMab/Mjb0FXGD4YbpF26NT8K9FXt/nV0mEAEAQKAQHCQnxDzmmXwOui9d4ntRi+CGpb+gNqYs4MwJiDPedTI6aUAsuGP4k2G/wCVN3uHA6fpRqOHrG1QbnD5Y6RGoPl2/OgEku3bB6sv7LdPQ9Kt+H4oXVJgCNxOo9R0qT/pG2hNt020Mxr2Ou4qfhltFYTKAdYECgD+M3WaAEYZS3mDoOoqMmCQqJcKAAT11IkgDoelGPE+HEociKzaRJj5yevrQjjMG6GXQrJ6/wD7DSiH8EiPICwi7Dv5nzqS+H8q74HYgt5ipmOZUXM0xtpRVLibYUSdKgPZkTuO9XWPKqASJ65evkYqnfGkaKg6/nRENrFNNbIqYmLBPiEelRrl6ToBQMUq9Y15QKlSpVBKs2qn2bNe2bVWFmzVDdqzU2xbB1FesmVWbsD9eld4HCuNAdIHxbjuQO3rRUm1ZqZbsV3hcKRuZJ/rSp9qxQU3EcLCMxmI6ekUNcNtFW+FmU5grd9JMg7GD186POK2R7pvT9CaDRbuWFZdHQwzaZhMAR5DzoJeD4kLSOUV2llBJg5QA2xGmw0qZauDF3ERSzW0hmJEEt1n0GnzNVlolcNceQA7BcsSAYJ103iR86I+UMGFQMDrBkUBBZtjYCANKkLYrnDHSrSzbmoivOFB0ImuLmHIAgTV0MPXjWgKCpWx1iuDhBvVytimr1mgBL3GLSXHRrYzAmSQJI6fKlZ41hpjIFnso/lTPOnCVY510cdRQEzupgk6VRqdnG2n0Vh+VOtaB2g1lb491IKnSrWzx10cQxZfof8AOijh8P5VDv4MERGnpULDczAgZhNW9nFI40IBoBDjWCecxXMv7imR0E7k+tUYnXxeumtaY9ntUG9hQeg+lBndzKRrvpTZAO5Aoh41wfL40AA6jt5jyqrWyewHkRREU2k/aH1qOydjNPuRJCjp9/Ko5JNBzSpRSoCmylTLaHov1MD+dLCWQANPtUpTEa6dDBj59qKr8dn0URrBI7GZWO560xhbtyzciSQD4l3Hoex16V1fvXPeFwSAZyRGykoTr1kH7V7YurqX0aZMiM06z896Av4biFuaAEMACVO8HYx2q3tWaBMNxBC6hkK5TC3VJ94vnroV1+GtIwNhwozlSf2hoCOhjoaIq+YbcYa6f3f1ArKrfEXIA6ayBMRodq2LmfDA4W5OgABnsMwk1nOJ4VYRGZrgEaKIjXtP60U0mL95h3VYWJZiQYb4FyiBAaANzrFG3LNkZf8Alg1m9u4UUoCSJzb6eemxnTXyrSeXj4FI7UFoVymI0qdhbvnFcOmY+dW3C+GzuI9aiPEYmm7kzRDbwSagRI32pi/gh0oKRXIrlySJq4TAg6V7e4blWgzrj6ZpmgLieB3Ma1qHGsESTvQnjcHOketVQBfTQ+VLCXQurCQenf8AlrVvxrC5BMRNUeQkZo0AAoi0t30IGUmdsp3nyPanLOKddATPY1Sq0a9RTyYruCSSNSST96Av4ZxQgjMSZ/rWiVPGsisxTEx1q85fxzF/GxKjpJigKb9iZ0oQ47w108SAlOsbr/l50drDiRFRr9misywyhjlJiQdflXD4cgld469KI+N8A0LWhruV798vn5ULsx0GulELKaVNzSoNGw1uQDFVuMxDi4wmBqoGnaPzq/sJ5VQ8fuKt0ROys2mkyY184oq14Ngg6o6qGQeF0fxZWGhdCdidCR1nvU/jvADdGdB4wNV/aA7dmrvlLCOttmYFQ7ZlB3iAJI6TFX2HxI92XOgA32Eaaz86IoLfLX9oS1cJyOQBcBETHhmOjQPyo5sWIAA2FU3CsQ6gFgWTTUGSJ209SKvcFiFcqE6nx6Hw+EmPUkUFdzRZJwl+G1C66eY0PbQ1g+Ich/F4h+fl+lfRPM2GnDuNgwM95iR+VfP+MtSyrOpJAPr/AOKKIOXOH2MSuJdiytZsl0TYMwDMQx3KgL5TNF/Jyk4dMwhho09CDBH1qDwLg4tYbEXbLL71LDSrKSrKJLyu5lWI+dUS8VxIv+5TEW1DMWJVAttiRmkF0zKSe/UUB5xfj6YWFVc9zqInL3qEvtTQaMqg7GOlB2K4g1m7L3zcktmVQmnYlsnin06VW3MQjv4wrBtQBbtho9Qo2HXrQavgOfLTEkMNe3X6b0RYTjKPqGFfPFxFtuCQADMFcw+viirnD81G0crK8gATImg2+5xpEPxaVBx/N1lNC29ZgOPe8XMCFGurN1qgvOt9mOYuw6+PKPXVQBpURpHFeecMpIifnVFg+NWsQWK6MDqp+xFBt6wiFgERiuUkw5Akdi+3nFdhzo1oKGHYZT8gDrVVZc0MAhPWYovscl4I2lyozHKuYl3+KATpmj7Vnz37mIlWQNAZiEYJooktmaRAg1qPK2PQ2ULsqF1LZcwkZpYeZ0NEDuI5OwwJ8B/vN/OqPi3Ldq2jOsiNhJMmdN60vFp+ICfkaD+MFrjhFUhRrqNz/IUAA1qN67wl4o4MxV3jeDvJgGqy9wx4Om1Ab8GuyoOcVaXbc0G8vcSdPAwEjy1ost3i3rRUa/aoX4zwgEm4i6/iHfzA70aXEmq+9boMxgef0pVaxXtEGNrjVkCSxHypvhXF7M3HuLqz6eHN4F8KDyOhPzqk4jw0IyIGBZo26CPET200+dO2sEo0KgjX+pooqu81YZldMzeJWXY9QRtv1qdhuZMKLYRg/wAIBGQwdIMUEYbCoJkIOxkTpFO3sGkEsdJmNSJgCfWOsUGlcO4/hAMoJUdsrkfUrU3D8fwy5hnVAQAIkdD1j7b1n/B+MYZbi284QGBmfMF9WMaCrvHJg2bK2JssNIALFCwGhDfCzANGm2agLeL8Wt3EREbPmJVso0ByGJmCATOsVi3GuHhLlopJGcBif2s5H+VEeM50w+FYrhk940QSwKoNztu32oK4jzJeuwDAAkqABpLFj9zvRG28uIH94qZVDoAv8cKzD7fastvWTh8ViLJAGV9mEFM2YoVnplI0qq5O4ubWOw9x3OXOFYk7K/hYz0iZ+VGvtT4ay4w4kCUcKjED4WAhGPkRpPl50FFhLGHVme7dSSCACwP8Rj+utV/F+JYZEK4dRn2zhdI6gE1Fv4EnYTOk9PrVhg+TjAe4wy7wuo+tAJozMQNW6ATRXw3gn9txWQkhVQFiu8kmAJB71MxqWbSNESBoI18oo99jvCyLb33UF7hmY2XpHad/pQZNzTwlsJeayC0CCCdyDmGsaHbtXXLDqouFtBAMnsJkVp3tlwMG3iFWShyt/CY/XT/moRwWDt3EYrEMBqPSgYXiKOrZERljUExIIgg9j5RQ7e/9Fp1G+XWToSIkdQdJq/xOAdEhygAIOYnSBp8JPUafIUJ4rENcYfsroo6AennvRUnhdpsRiEUgHMwJ00gSTp2rX+EcHy3i0AAgagAT0oC5HwYQ3MS4OS2pg/dt/wCGPnXWO9oNwtNpcoAIBY6x6D+dBtf+jEyx8/1of4xgEDK40glW8g2x9A0fWgXlvmx8Q/u7124rH4SH8J/djoe3erbHo4ke8ePMzPyNRFpgHtsniidiOxmmuJ8ISJQCNRQZxDGG0x8R6SetS8BzR4ShaQfPaqqvx2ECXJBgjQ/pNXvDsT4RJAoe4pi8xLA7/lUK3j2iAf50Bpe4gogBhPYa6Urb5xNDGAvrMtp3k7+pq1PMWHQQTqOi6/QjSgGMteVH/wBIJ5/SlQS8JgHcyEu5dQGVZnoZk6mfpFWFrl9zoEvx5j/+q0fhODFu2iDZVA9dNT8zJ+dXeHSiMiHKTzph7jf9JH3NSMNyW7pCpcCsQSMukiQN9dJNbTh0qbZKomZiFUbkkADXqTtQY1Z9nrhfguE9isD6zVXzFwpsLZBe2UcuQinUAQCzCDE7dK26/wA2YJELHEoQuhCnMxPko1PyrGOfOOpi7pKJlWSQTudhJoATD4drhMH+u1dYXBs7FdiN6fs2MrkBoj8qt1uspmA2nbX60DfCMPbPgdAWUk6jp09a0blfiPvA6XiHUQmVgCCkaA9/8qylsUfehoidKJOVeJMuJCM3hcaT3BkR8poDvifs/V5bDXDbB1yPLJrqYbcD1mht/Z3xBCcjheoyXGC/TT8q0rAY8EjWrz+2KFJJAA6zH1qDH8PyFdZ0TEXmfTMyz4dNTr17VrPLlpLdsKpGlCHM/EVMlH8QBAihzl3m1bUo+aRsSSde07x60Glc1YNL1tkaCGGUjuDvWPYrkrHIWTDuSqkjLmynuInvPeiHHc2tcuqbb7ECIG2nUzG/+dGPCsQpJLMCzan1gUGOr7P+IuQblt/VnRvzerzBez5UOfEMAN8qH7TAgfX1rYbl5cvyoI5n4gNQOg1PbQxVGZc3cUIzYe3C2vDKrpIGwPl1oZGEYqGHWpHEcTndn3kmPTYVIwrSgHagqrTFWBBIIO43Fa9wzE++wyXDqSsN/ENDWUYiwcxMdaIuC8yvZQWMoZZLa7id/wAqCVzBhxEsDGam+buEWLNnBOgg3LMvBJzMG79DBiu+NcUS5aUCVYMS0+gGkeh186e5mxVq9w3DC1JNhgreSspAPeJUCaKFMfhspX8OYTHbyPnUPOV0Bmur+JZwAxmNqYNEONcJ3JPzpBxXAFKKBTSrylQfQtm4oYKSBPmPpVtYZQJkQN9aF7Ny3ddAcy5pkftHRRJB02P086lcb4nh8KgS4hIIzoFPiZx4dewg6tQFr4q3aTPcdUQdWMfIdz5VmntC5zW8gs2JyBgzE6F4mIHbWdewoR41x+7ibhd29FHwqOgUfr1qBekqTO2tAnxCuFJMTsfPtXF74dNSpn5dRUErIK9xmXyPapeG8TDsyz8+tBzcQM6k7MKsVSEgmY0Hp0qtunKq/uuR6Dp+YqxZpX10oKTGCHX1/Wn8W5R0dd1INMYsS6/KneMLtQaJw7jAZUdCdRPTfTTv1qZx7izsi21zAEgtE7RprWbcC4gVOQmAdu3nRrhrmcrnYaQI11HTQUEXAY5GLK9wqCsa6EtoNJ3/AMquMFyqjgOL6ySGhlnXsTMD1q5xPCUVAyW/eAQYjXbX1qMvG+HokXLWRtv9Wc09pUjWioR5Za0uZbiEjU5fCNTJAn5fSqq/xgo48fjzHSZ08x9ftRHd4nw+6ALduTMfAQTt36V1d4BbdJyKvbvPT+vOiGbXMbshn8I328gKE+ZeKlbbH8dwkD0PUf11qZxTEe6V0IyxuZG0D+poC4ljDcefwjRfTvQMXPhAqzwahV17VVXdSBVtZ0XX5+goPLwERGoGvrUbDLLFu2gru+576sdKbYR4BoOp/rrQOO5dsq/CPiJ2qysuluQWXKdCrDMPp2661VHE5V8IgDRR59T51zhMJnOZyY+5oCHD2rN1GKrbJUiSECb+WvahvHYcq06QT02omwJVBCgAf1v3pzH20ZG8C6j4huD0MDzoA11iuJNPM2uo1GhrxrpoGaVezSoNX4xxEYSJId5DIpBjrq3lPSgnHY977tcdyzsZJP5DsB26VGxuLe67O7Fix1P8uwqArFW30oHvew5qUcQNB0NV2WW1PpTzrofLb+VBMtWp9QT9K5wbwCOqMY9DXGCxJ+E69QaasHxOPnQe4h8yN/GPyFWeEMoJ7a+oMH8qqcOSwYdJBq0wLeE+s/I6f9v3oIF9T7wCdCZ8tJj8zT3E1la6uIS4PY17jULKANzQUtt4IPajvAYjIiXh4regeNWRv3h+zsQR0OtA94iYXYaDz86sOE8Te0RB02I6EdiOtBt3L3EFcfECDtEdY0qPxPhiXSzypJkqDlgb6x123rObePdBnw7hQdcseGesdVJrjFcz3smXJDaiQxiJBgDptRWpWeFW8Os5AGEeERvpP0Mmh/mTjiKpEHXQCZ1Pwx3MAbd6Gv8A2jxN/wAKLlBAGZm1B7wBrHSrDh/D0tsLt587DUSNFP7q/h9d6AZ5kW4LQe4YNxtF/FAG7fy86GbAk1c818WOIvT+BPCv61TWTDUR6urfOrQvoB1P5D+hUAWfED0p9237DT9T+lAlMueyj71wz+EmNT/QriwfC59a5c6KKDkjUDoP/NTrN3r0qDM/WnnIG+w6UFlbvk1KsXoMkx5VSf2uBoIpk3mmSfQUEjH5WuMw6nYfrUZVE/zrg3CTvSaRvvQeUq5mlQT2aN68uW8w06V4mJB0bSkykbf+aBl1kT1FO+9lQ3yNcpc7iuQMpI6Gg7w9wLJNe2Wlm9KintTuHaDPlQd4d9WBjWrqxbkALr4SPnuPyqkwuHZ7ioiszMYCqJYnsAKJuLYJ8EypfUK5VWCBgzQZENGincEUFe6kk6gRudlHqagYzGz4VOmxPU+Q8qbxeKZ/3V6KPzPc1ESg9trJqXaTxMux3Fe8NIzmRNc33y3ifMflQPYTEhGhpAO/UfTpV1hrWHeCbqz2LBfsYqixCA1BZCKDQrL2LY/1qD/nX+dUXHOOhpRGkdx/OhivRQeu0mvAJroLoTXFBKsEnzFO3tEPnXGHcH+L86dxlll8LKymAYYFTB2MEba0DOH+Fh5Gm23+VO2lgH0qKzUHasBXLGdTXAp9AN2+lBwi9TtTour21rzKp1mvGKjag6VQPnXLIJMnrXXvBM1IZFY+uo/I0FfpSpzJSoOnSvFuFdNxSLdRXmYHyoHGM6jXuOopHUUzBB0pyc3kaBstrSQ61y1IaUGr+w7Dhr+JPUWlWIGzMZ1iRsNqFvaTdzcRxAD51VlUQZAhFzAeQbMPrVp7GuJC3jyhMC8jKP4gQw+waoHtG4SuH4heVZyPlujXbOJYf3s32oBS+sCmUp29TANAV+zrgQxeNFttVVHdhtmAGUAGdPEy61Wc08NOHxDW2BBgEg7g6gj7UT+yvi6YW5fulS7sq20Vfi8TZif4RlE1Y+0vl5rj2cTZBY3kZ3JOs5pG2ggED5UGeK0gE149sRtU5uDXba22uoVS4CUaQQwETsdN9jVfi4Byr86CO5HSvFQmnUtgat9K8a70FB1fIACio9ek15QOKO5I7Vvfs89zxLh4GLRb72ndC1wZnj418W40MfKsArcfYLH9nxIjX3qz6ZNB+f1oMw5j4V/ZsTesTPu3IB/dPiXffQgT5UPNvR77V4/0jd9E/wAIoDbeg9UE7V6UA3NeprSYCg4kdqWc0jXNAppxLhEVwKRFB1mpVxSoO10NesO1IMIpsmg9Jp/DYZ7jBEVmY7ACT/4868wuFe44S2jOx2VVLMeugGprV+RuV72FwuJxGItMrsE92pXxhUJLk/sgztv4aCy9nHs/se595ibSPeDkiSzBVgZQVBytqCdQay3nbCC1jsTbGy3CB9j+ta9yfzG3vzbVRDr1JJkGRt5E1kXPN3NxDFH/AIz/AGMfpQQeAY42MTZugxkdSfSYb7TWoe2zAqf7NiVU+IMjN0OgdAfSXiseraeab/8AaeX7N3NqhtEjeWB90R8i8/Kgxy41NdKTGlQGns8Pu2vYiMxRFRVIkMzk/kF69Joox/GrqolklWtlHRQRGWY1z9QpiOkCKDeQbLXcR7kFoYZoGxKzGbTaGYfOjjG2Xt3EF/D++ZxlhFJVSI0SPxDcga660FfzLnOBNvEMq3bLTZAWM6CFYqY8QgkbDYVmDr13860vmziJv3mYMSiqFRY+EaEgjo0jWddqXAfZumIcq+MVH+Ioqq5IPVTn0Go3WiszVZr3KK+h+HeybAW4zi5eP775V/uoF+80SYHlXBWSDbwtlSOotqW+pk0R818M5XxeI1t2HK/tEZU/vNAPymq3HYVrVx7bxmQlTGokdq+teI2pQ6bCvmLny1lx18RHiB+qrQD1bp7Bv9mxBj/fDX/7Y/r51hdbt7CG/wDc74j/AH5M+ttf5fegz32oXZ4jiPIoPoi0Fmij2kPPEsV/H/2qKF6BzKR6b161S24Tf9yMR7tvclsueDlDaaE9N6gTQek1ya6rmg9Wva8BpCgVKlSoPKew+HZ2CIpZmICgCSSdhTvDsC964LaAZjO5gCNSSa0Hg3CLGFcF2bNGR8wAVs0EeYAIB+QNBe8lcHHDwPe2s165GZgfEiTEKR0G52k/Kj7CcUkP4mKqshmWFkDVZJCt3k9ztFBGJ5ktpmzlXjQS3Sfw6Ek9O2lWPLPGLL3WtuAmdVARiCpLDMNG0mNPUUBjw6HtC6CVmTCgZcskEZfr51838+2cnEcUBt71iPRvEPzr6V4IIQplK5GK6jQjcFe4gj5zVRxf2fYDE3WvXrBZ2iSLlxZgADRWA2FQfMuGwz3GCojOx2VQWP0Gtaxyphby8KxmGxGHuLCXHthrbCTlLLEjcOAfpWt8J4Jh8MuXD2UtjrlUAn+Jt2+ZqxYUHxrSr6O5k9l+CxLF1BsXDqTbjKT3KHT6RWX8weyvHYeWtqt9B1t/HHcodfpNUUXJPEmw+KS4iB2GykkAnpt56/Kvpi1ZW4iPdCk/EJ0VSVy6fIkT5mvnLkLAMccAywLSu7hgRAUbEb6kgR51o+AR7gdmuOZIJVTJMzsJ0UbaeVAcXeU8C5J9wkkkkqSCSdSdDTPD+R8HYcPZtm24nxKxza7gkySPWg2/h2QnLdy+DNDmG3IywJ10n5ioq8XvrtdcfM1BryqR1n1H8qRDdx9D/OsgPNeLXa63zJNSrXOmL/bB9VU/pQaTxLFrbWbjoisQoZ3ygsdAJI3PasO9rHK+IS+cVkBtMFBZTMEDqN421otuc5X3GW5btOsgwygiRqDHcGmON81PibZs3LahG3ZZzL0mCfEPKgw+t99h9qMA7ftXnP0RFrCcXZKO6HdWZT20JH6Vv3scUDhi6bvdJ89VWqMZ55vZsfim/wCK320/SqJRqKn8wPmxV897tz/EagIdR60H0jyjwpX4ZZt5AyXLS5gYhswkz9awnmjgLYS5lJBBLQJkjKYIP863T2XcZVuG2Q0yme38lJy/9JFZp7R7S3775AQ1t7g1IgqWnptQZzSp29ZZTDAg+f0kdxpTQoPRSFeV7QKaVeUqC65cxXuXa6D4guVdAdT6+n3ovw3FnuW85KkglWAB+RIncz0rP7GMZdoIiIIG1EmCx1pg7o72bmUeAKHRjpqNJA0+VB7iRcW7m92CH/CFBUDbUCQuutEPAeXzdcs17xMVUIFOykEtM6AR+VU/L/HAxdLgLM8ZAo8RP7MAd9Z9a0ThGCbDWy+Qs7CWyiSo7AbkDyoo+wVxERVBgARXd3iSdGFZti+ZDGuZT0zArP1FU7cz6/FHkT+RojXrPE1M1PtNInvWV8K5rQ6FvF270Q4PnazOUuuYaMpYSPUVAagV1VHY5kssNWA+dc4jmewgnMPqKCr5+S1asvfCKLzr7sOAAxUspIJ6/CKy08YdR0FSPaDzaLzAowKZvDB/ZkH7n7Vnd/Hu3WqC3EcxOJ1H0qCnHL7sQmZvJVmPkBQ1kc/hY/I1pns54g9q0yf2a5mLFs4tt4gdvFHSgrbdy+tpb11AqMYVjlBO+yzMabxTmH4zbmDIop5ts4zEWPd2reUsfFmCar1Gvw9NaAzyHjwJyqfLPr+VAU2LiOuZDP51C4riBatu56DTzOwH1qt4Bgr1kOLylGkDK2+nWq7mzGEgWxt8TfoKKGHYkkkySZPrX0L7JGI4Vbkfiu5fT3n85r53r6H9lqsOEWzIM+9I8v8A1SNf7pqIwTi+t+8f+I/+I1EXen8eZu3D3dj/ANRphao+gfZTwknh1tiQA7XGiNfjKg/RaHOcuDhMU4Lk5sraADdRNEXs85gVeHWFCfAGU69Q7a7UJ8/caY4mQoAKL3OxYfpQO4/llL/Ciygm9ZLup0nKGzMug2Kkn1ArJa1flXjLvh71uQJJiBtmSOvpWVupBII1Gh+VBxSpUqBUqVKg7WJE1IKeIC2SSdAOppoWxE5vtV5w3AZEF7csGy+Ww+utAV8icFFtmusQz7A9B3g/afKtEt3vOgjgeKCIonSAKKcNiAetBdo+YQYPrVFxvlhbuq2lPmsKas7N2p1m9UGUHlfFWrkpYuMAd4mPmKrOJ8j8QvYh3TCvDEGTlUTlE7nvNbxbv1MTEgdaDOfZ7yPjMMzNiPdFDBClixBBB7QNhpVjb9lWHZ3e/fv3FZmYJnyooJJC9SQAY3o3fHqKr7nE/ERMDPHyoGMJyXgEXKmGt6aSRmYdd2mmcRyphx8CKPQCpuIxDN4h00aO3SuLN9upoKp+BIuyiurVjKanYlm+tRldoMjUEflQTsJbB3qTawozkNt+HtFVVkOT4YGn4vh+flXfFeacNhoN/EWlKj4VbMxPkgk0FT7ROGqLSXVENmC+s1j/ABnCznJOpoi5+57fHgWcIlz3amSQpLsYImF+EQfuaze6zAkMWnqDM/OaoZrfeQsYq8EWDBVbv3vOfyrAq1exxB7PB0tvAGSQepD57i/a4ooMruNJJ7kmuQK8p2ywDKTsCCY7A0G78o8tJaw1se9ZiQGYAaK5ALKJ1gHyoe9ovC0RrTy2ocbjoQR086sOF8xurtClrTBciArnnSWAP4d9fSYioHHeY7V9cjWM+XWfeJ4ZO4ZCenyoIvI2Ft5ro1PhU79ie3rXPOXK1lke9bGR1GYwfC+usjofMVX8FxQS8BbdkLqy5XysP2gc4jSF7U9xritxrbqX/CwMAUGduhBIIgiualX2LanU96i0CpUqVQdHaiqx/s9v0/UUqVUEOB+EfKibh36ClSoq3s1OtUqVREs7Uwv/AHn9aVKgkXdhVfjfxfxD9KVKgncM+B/Sn8J+lKlQOXfhquxv6GlSoM95o/1b1ktKlQax7Hdn/jFDvtb/APiL/wACfrSpVQE1o3MP+wW//l2//wAdulSosZyaQpUqIOOHfGv/ANKf8Jqqwv8Auv4z/wBte0qok4T42/5/8Zp7H/A38LflSpVFCa1xf3P9dBSpUQ3SpUqg/9k=',
    start: '1:00 PM',
    startDatetime: '2022-01-21T13:00',
    end: '2:30 PM',
    endDatetime: '2022-01-21T14:30',
  },
  // More meetings...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Calendar({currentAccount}) {
  return (
    <div className='m-10'>
  
      <section>
     
        <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
          {meetings.map((meeting) => (
            <li
              key={meeting.id}
              className="group flex items-center space-x-4 rounded-xl py-2 px-4 focus-within:bg-gray-100 hover:bg-gray-100"
            >
              <img src={meeting.imageUrl} alt="" className="h-10 w-10 flex-none rounded-full" />
              <div className="flex-auto">
                <p className="text-gray-900">{currentAccount}</p>
                <p className="mt-0.5">
                  <time dateTime={meeting.startDatetime}>{meeting.start}</time> -{' '}
                  <time dateTime={meeting.endDatetime}>{meeting.end}</time>
                </p>
                <p className="mt-0.5">
                  <time dateTime={meeting.startDatetime}>{meeting.startDatetime}</time>
               
                </p>
              </div>
              <Menu as="div" className="relative opacity-0 focus-within:opacity-100 group-hover:opacity-100">
                <div>
                  <Menu.Button className="-m-2 flex items-center rounded-full p-1.5 text-gray-500 hover:text-gray-600">
                    <span className="sr-only">Open options</span>
                    <DotsVerticalIcon className="h-6 w-6" aria-hidden="true" />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="focus:outline-none absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            Edit
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            Cancel
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </li>
          ))}
        </ol>
      </section>
    </div>
  )
}
