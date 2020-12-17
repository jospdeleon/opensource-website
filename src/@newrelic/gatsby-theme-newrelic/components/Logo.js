import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const Logo = ({ className, width }) => (
  <svg
    viewBox="0 0 247 53"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    css={css`
      fill: none;
      width: ${width || '247px'};
    `}
  >
    <Letter d="M64.8524 35.3288C63.1856 35.3288 61.6333 35.0173 60.1956 34.3943C58.7578 33.7714 57.4939 32.9084 56.4124 31.8098C55.3266 30.7112 54.4827 29.4441 53.8804 28.0045C53.2739 26.5649 52.9728 25.0201 52.9728 23.3658C52.9728 21.7116 53.2739 20.1667 53.8804 18.7271C54.4827 17.2875 55.3309 16.0205 56.4124 14.9219C57.4982 13.8232 58.7578 12.9687 60.1956 12.3542C61.6333 11.7438 63.1856 11.4365 64.8524 11.4365C66.5192 11.4365 68.0715 11.7438 69.5093 12.3542C70.947 12.9645 72.2067 13.8232 73.2924 14.9219C74.3782 16.0205 75.2222 17.2917 75.8244 18.7271C76.4267 20.1667 76.7321 21.7116 76.7321 23.3658C76.7321 25.0201 76.4309 26.5649 75.8244 28.0045C75.2179 29.4441 74.3739 30.7112 73.2924 31.8098C72.2067 32.9084 70.947 33.7714 69.5093 34.3943C68.0715 35.0173 66.5192 35.3288 64.8524 35.3288ZM64.8524 31.2836C66.3581 31.2836 67.6601 30.909 68.7543 30.1597C69.8486 29.4105 70.7011 28.4339 71.3076 27.2216C71.914 26.0093 72.2152 24.6876 72.2152 23.2606C72.2152 21.8126 71.9183 20.4866 71.3245 19.2828C70.7307 18.0831 69.8783 17.1192 68.7755 16.3951C67.6686 15.6711 66.3623 15.3091 64.8524 15.3091C63.3468 15.3091 62.0405 15.6711 60.9293 16.3951C59.8223 17.1192 58.9699 18.0831 58.3803 19.2828C57.7866 20.4824 57.4897 21.8084 57.4897 23.2606C57.4897 24.6876 57.7866 26.0093 58.3803 27.2216C58.9741 28.4339 59.8223 29.4147 60.9293 30.1597C62.0363 30.909 63.3468 31.2836 64.8524 31.2836Z" />
    <Letter d="M80.2269 41.5127V18.778H84.1288L84.2306 20.5796C84.642 20.125 85.2654 19.662 86.0967 19.1863C86.928 18.7106 88.0095 18.4707 89.3328 18.4707C90.9783 18.4707 92.3271 18.8748 93.3916 19.6788C94.4519 20.4828 95.245 21.5183 95.7709 22.7895C96.2968 24.0607 96.5598 25.4077 96.5598 26.8347C96.5598 28.0807 96.3774 29.1456 96.0127 30.0296C95.6479 30.9136 95.1899 31.6839 94.6428 32.3405C93.7309 33.4055 92.73 34.159 91.6485 34.601C90.5627 35.0429 89.4515 35.2618 88.3106 35.2618C87.2588 35.2618 86.4657 35.1776 85.9313 35.0051C85.3969 34.8367 84.8286 34.6388 84.2348 34.4115V41.5127H80.2269V41.5127ZM84.2348 26.0812V30.8041C85.0322 31.4608 86.2451 31.7891 87.8653 31.7891C88.845 31.7891 89.6805 31.5492 90.3634 31.0735C91.0462 30.5979 91.5721 29.9791 91.9369 29.2214C92.3016 28.4637 92.484 27.6639 92.484 26.8263C92.484 25.9213 92.3525 25.1004 92.0895 24.3638C91.8266 23.6272 91.3897 23.0379 90.7705 22.5959C90.1556 22.1539 89.3328 21.9308 88.3064 21.9308C87.4836 21.9308 86.7711 22.1455 86.1688 22.5748C85.5623 23.0042 85.0915 23.543 84.748 24.187C84.4045 24.8437 84.2348 25.4709 84.2348 26.0812Z" />
    <Letter d="M112.689 29.9574L114.882 32.4031C114.814 32.4704 114.623 32.6598 114.318 32.9629C114.012 33.266 113.563 33.5985 112.982 33.9479C112.401 34.2973 111.659 34.6046 110.755 34.8655C109.852 35.1265 108.775 35.257 107.519 35.257C105.806 35.257 104.317 34.8866 103.049 34.1542C101.781 33.4175 100.793 32.3946 100.089 31.0771C99.3802 29.7638 99.0282 28.2568 99.0282 26.5563C99.0282 24.9946 99.376 23.5845 100.072 22.3259C100.767 21.0673 101.726 20.0697 102.947 19.3372C104.169 18.6006 105.577 18.2344 107.176 18.2344C108.66 18.2344 109.903 18.4954 110.908 19.0173C111.913 19.5393 112.723 20.2338 113.338 21.1094C113.953 21.9807 114.398 22.9615 114.674 24.0475C114.95 25.1335 115.085 26.2448 115.085 27.3771V27.9538H103.1C103.1 28.7241 103.32 29.3976 103.766 29.9743C104.211 30.5509 104.775 31.0056 105.462 31.3339C106.149 31.6622 106.845 31.8264 107.549 31.8264C108.601 31.8264 109.466 31.7085 110.153 31.4686C110.84 31.2329 111.387 30.9635 111.799 30.6688C112.21 30.3784 112.507 30.1384 112.689 29.9574ZM103.066 25.0619H110.942C110.942 24.5189 110.798 23.9801 110.513 23.4456C110.229 22.9152 109.814 22.4732 109.262 22.1196C108.715 21.7702 108.02 21.5934 107.176 21.5934C106.285 21.5934 105.538 21.7702 104.932 22.1196C104.325 22.469 103.863 22.911 103.545 23.4456C103.227 23.9801 103.066 24.5189 103.066 25.0619Z" />
    <Letter d="M118.203 34.7141V18.7775H122.071L122.172 20.5791C122.584 20.1245 123.178 19.6572 123.954 19.169C124.73 18.6807 125.748 18.4365 127.003 18.4365C128.988 18.4365 130.515 19.03 131.575 20.2213C132.636 21.4125 133.166 23.0121 133.166 25.0284V34.7141H129.124V25.062C129.124 24.0644 128.844 23.2815 128.284 22.7174C127.724 22.1534 126.999 21.8671 126.108 21.8671C124.989 21.8671 124.064 22.2755 123.335 23.0921C122.605 23.9087 122.24 24.9063 122.24 26.0849V34.7183H118.203V34.7141Z" />
    <Letter d="M142.344 31.0774L145.359 28.3245C145.745 28.7328 146.203 29.1747 146.729 29.6504C147.255 30.1261 147.883 30.5344 148.612 30.8753C149.342 31.2163 150.186 31.3847 151.144 31.3847C152.493 31.3847 153.49 31.0732 154.143 30.4502C154.792 29.8272 155.118 29.0948 155.118 28.2571C155.118 27.2847 154.72 26.5229 153.918 25.9798C153.121 25.4368 151.691 24.9738 149.639 24.5865C148.247 24.3129 147.098 23.8499 146.199 23.1933C145.296 22.5366 144.625 21.7494 144.18 20.8318C143.735 19.9142 143.514 18.9586 143.514 17.961C143.514 16.8035 143.807 15.7343 144.388 14.7493C144.969 13.7643 145.847 12.9645 147.026 12.3542C148.201 11.7438 149.681 11.4365 151.462 11.4365C152.671 11.4365 153.71 11.567 154.58 11.828C155.445 12.089 156.17 12.4047 156.755 12.7793C157.336 13.1539 157.79 13.5159 158.108 13.8653C158.426 14.2189 158.655 14.4715 158.795 14.6314L155.954 17.2833C155.818 17.1486 155.547 16.9087 155.148 16.5677C154.749 16.2268 154.236 15.9153 153.608 15.6332C152.981 15.3512 152.221 15.2081 151.331 15.2081C150.143 15.2081 149.27 15.4901 148.71 16.0584C148.15 16.6267 147.87 17.1907 147.87 17.759C147.87 18.5503 148.197 19.2028 148.845 19.7121C149.494 20.2214 150.758 20.6676 152.629 21.0549C153.816 21.3033 154.927 21.7073 155.966 22.263C157.006 22.8186 157.845 23.5889 158.486 24.5739C159.126 25.5589 159.444 26.8217 159.444 28.3623C159.444 29.6757 159.092 30.8585 158.384 31.915C157.676 32.9674 156.7 33.8008 155.458 34.4112C154.215 35.0215 152.803 35.3288 151.229 35.3288C149.723 35.3288 148.392 35.1015 147.238 34.6511C146.084 34.1965 145.105 33.6367 144.295 32.9674C143.468 32.2981 142.823 31.6667 142.344 31.0774Z" />
    <Letter d="M162.481 26.7292C162.481 25.1885 162.846 23.7742 163.575 22.4819C164.305 21.1896 165.314 20.1584 166.603 19.388C167.893 18.6177 169.394 18.2305 171.108 18.2305C172.821 18.2305 174.322 18.6177 175.612 19.388C176.901 20.1584 177.91 21.1896 178.644 22.4819C179.374 23.7742 179.738 25.1885 179.738 26.7292C179.738 28.2698 179.374 29.6841 178.644 30.9764C177.915 32.2687 176.901 33.3042 175.612 34.0871C174.322 34.8701 172.821 35.2615 171.108 35.2615C169.394 35.2615 167.893 34.8701 166.603 34.0871C165.314 33.3042 164.305 32.2687 163.575 30.9764C162.846 29.6841 162.481 28.2698 162.481 26.7292ZM171.108 31.793C172.134 31.793 172.986 31.532 173.661 31.0101C174.335 30.4881 174.836 29.8357 175.166 29.0569C175.497 28.274 175.663 27.4995 175.663 26.7292C175.663 25.9588 175.497 25.1885 175.166 24.4182C174.836 23.6479 174.331 23.0039 173.661 22.4819C172.986 21.96 172.138 21.699 171.108 21.699C170.081 21.699 169.229 21.96 168.559 22.4819C167.884 23.0039 167.384 23.6479 167.053 24.4182C166.722 25.1885 166.557 25.9588 166.557 26.7292C166.557 27.4995 166.722 28.274 167.053 29.0569C167.384 29.8399 167.884 30.4923 168.559 31.0101C169.229 31.532 170.081 31.793 171.108 31.793Z" />
    <Letter d="M182.885 28.4631V18.7773H186.927V28.4294C186.927 29.427 187.207 30.21 187.767 30.774C188.327 31.3423 189.052 31.6243 189.943 31.6243C191.063 31.6243 191.987 31.216 192.717 30.3994C193.446 29.5828 193.811 28.5851 193.811 27.4065V18.7773H197.853V34.7182H193.985L193.883 32.9166C193.472 33.3712 192.882 33.8384 192.119 34.3267C191.355 34.815 190.333 35.0591 189.052 35.0591C187.067 35.0591 185.541 34.4572 184.48 33.2575C183.42 32.0537 182.885 30.4541 182.885 28.4631Z" />
    <Letter d="M201.823 34.7146V18.778H205.691L205.792 20.7816C206.043 20.4659 206.378 20.1292 206.802 19.7798C207.226 19.4304 207.748 19.1232 208.375 18.8622C209.003 18.6012 209.749 18.4707 210.619 18.4707C211.009 18.4707 211.357 18.4917 211.662 18.5381C211.972 18.5844 212.286 18.6643 212.604 18.7738L211.781 22.5454C211.234 22.3391 210.615 22.2381 209.932 22.2381C208.812 22.2381 207.854 22.5917 207.056 23.2904C206.259 23.9934 205.856 24.9321 205.856 26.1107V34.7104H201.823V34.7146Z" />
    <Letter d="M226.307 30.0251L228.703 32.6096C227.948 33.401 227.054 34.0366 226.014 34.5123C224.975 34.9879 223.784 35.2278 222.435 35.2278C220.607 35.2278 219.05 34.8701 217.761 34.1587C216.472 33.4431 215.488 32.4497 214.818 31.1658C214.143 29.8862 213.808 28.4087 213.808 26.7292C213.808 25.1885 214.173 23.7742 214.902 22.4819C215.632 21.1896 216.641 20.1584 217.931 19.388C219.22 18.6177 220.721 18.2305 222.435 18.2305C223.737 18.2305 224.924 18.462 225.997 18.925C227.071 19.388 227.982 20.0194 228.737 20.8108L226.167 23.3953C225.735 22.8734 225.204 22.4651 224.577 22.1704C223.949 21.8758 223.236 21.7284 222.435 21.7284C221.409 21.7284 220.556 21.9684 219.886 22.444C219.212 22.9197 218.711 23.5385 218.38 24.2962C218.049 25.0538 217.884 25.8662 217.884 26.7249C217.884 27.5163 218.049 28.2992 218.38 29.0696C218.711 29.8399 219.212 30.4755 219.886 30.9722C220.56 31.4731 221.409 31.7215 222.435 31.7215C223.232 31.7215 223.97 31.5699 224.645 31.2626C225.319 30.9596 225.875 30.547 226.307 30.0251Z" />
    <Letter d="M243.806 29.9574L245.999 32.4031C245.931 32.4704 245.74 32.6598 245.435 32.9629C245.13 33.266 244.68 33.5985 244.099 33.9479C243.518 34.2973 242.776 34.6046 241.872 34.8655C240.969 35.1265 239.892 35.257 238.636 35.257C236.923 35.257 235.434 34.8866 234.166 34.1542C232.898 33.4175 231.91 32.3946 231.206 31.0771C230.497 29.7638 230.145 28.2568 230.145 26.5563C230.145 24.9946 230.493 23.5845 231.189 22.3259C231.884 21.0673 232.843 20.0697 234.064 19.3372C235.286 18.6006 236.694 18.2344 238.293 18.2344C239.777 18.2344 241.02 18.4954 242.025 19.0173C243.03 19.5393 243.84 20.2338 244.455 21.1094C245.07 21.9807 245.516 22.9615 245.791 24.0475C246.067 25.1335 246.203 26.2448 246.203 27.3771V27.9538H234.217C234.217 28.7241 234.437 29.3976 234.883 29.9743C235.328 30.5509 235.892 31.0056 236.579 31.3339C237.262 31.6622 237.962 31.8264 238.666 31.8264C239.718 31.8264 240.583 31.7085 241.27 31.4686C241.953 31.2329 242.504 30.9635 242.916 30.6688C243.327 30.3784 243.624 30.1384 243.806 29.9574ZM234.183 25.0619H242.059C242.059 24.5189 241.915 23.9801 241.631 23.4456C241.346 22.9152 240.927 22.4732 240.379 22.1196C239.832 21.7702 239.137 21.5934 238.293 21.5934C237.402 21.5934 236.656 21.7702 236.049 22.1196C235.443 22.469 234.98 22.911 234.662 23.4456C234.344 23.9801 234.183 24.5189 234.183 25.0619Z" />
    <Shape d="M21.6938 9.71094C17.8555 9.71094 14.3692 11.2347 11.816 13.714L14.6873 15.3599C16.5874 13.794 19.0346 12.8427 21.6938 12.8427C24.3531 12.8427 26.8002 13.7898 28.7045 15.3599L31.5758 13.714C29.0226 11.2347 25.5364 9.71094 21.6938 9.71094ZM10.7133 23.7449C10.7133 23.1262 10.7684 22.52 10.866 21.9349L7.99043 20.2848C7.70627 21.3919 7.55359 22.5537 7.55359 23.7491C7.55359 30.1726 11.9263 35.6027 17.8725 37.2612V33.9652C13.6949 32.4162 10.7133 28.4257 10.7133 23.7449ZM21.6938 9.71094C17.8555 9.71094 14.3692 11.2347 11.816 13.714L14.6873 15.3599C16.5874 13.794 19.0346 12.8427 21.6938 12.8427C24.3531 12.8427 26.8002 13.7898 28.7045 15.3599L31.5758 13.714C29.0226 11.2347 25.5364 9.71094 21.6938 9.71094ZM10.7133 23.7449C10.7133 23.1262 10.7684 22.52 10.866 21.9349L7.99043 20.2848C7.70627 21.3919 7.55359 22.5537 7.55359 23.7491C7.55359 30.1726 11.9263 35.6027 17.8725 37.2612V33.9652C13.6949 32.4162 10.7133 28.4257 10.7133 23.7449ZM21.6938 9.71094C17.8555 9.71094 14.3692 11.2347 11.816 13.714L14.6873 15.3599C16.5874 13.794 19.0346 12.8427 21.6938 12.8427C24.3531 12.8427 26.8002 13.7898 28.7045 15.3599L31.5758 13.714C29.0226 11.2347 25.5364 9.71094 21.6938 9.71094ZM10.7133 23.7449C10.7133 23.1262 10.7684 22.52 10.866 21.9349L7.99043 20.2848C7.70627 21.3919 7.55359 22.5537 7.55359 23.7491C7.55359 30.1726 11.9263 35.6027 17.8725 37.2612V33.9652C13.6949 32.4162 10.7133 28.4257 10.7133 23.7449ZM21.6938 9.71094C17.8555 9.71094 14.3692 11.2347 11.816 13.714L14.6873 15.3599C16.5874 13.794 19.0346 12.8427 21.6938 12.8427C24.3531 12.8427 26.8002 13.7898 28.7045 15.3599L31.5758 13.714C29.0226 11.2347 25.5364 9.71094 21.6938 9.71094ZM10.7133 23.7449C10.7133 23.1262 10.7684 22.52 10.866 21.9349L7.99043 20.2848C7.70627 21.3919 7.55359 22.5537 7.55359 23.7491C7.55359 30.1726 11.9263 35.6027 17.8725 37.2612V33.9652C13.6949 32.4162 10.7133 28.4257 10.7133 23.7449ZM21.6938 9.71094C17.8555 9.71094 14.3692 11.2347 11.816 13.714L14.6873 15.3599C16.5874 13.794 19.0346 12.8427 21.6938 12.8427C24.3531 12.8427 26.8002 13.7898 28.7045 15.3599L31.5758 13.714C29.0226 11.2347 25.5364 9.71094 21.6938 9.71094ZM10.7133 23.7449C10.7133 23.1262 10.7684 22.52 10.866 21.9349L7.99043 20.2848C7.70627 21.3919 7.55359 22.5537 7.55359 23.7491C7.55359 30.1726 11.9263 35.6027 17.8725 37.2612V33.9652C13.6949 32.4162 10.7133 28.4257 10.7133 23.7449ZM21.6938 9.71094C17.8555 9.71094 14.3692 11.2347 11.816 13.714L14.6873 15.3599C16.5874 13.794 19.0346 12.8427 21.6938 12.8427C24.3531 12.8427 26.8002 13.7898 28.7045 15.3599L31.5758 13.714C29.0226 11.2347 25.5364 9.71094 21.6938 9.71094ZM10.7133 23.7449C10.7133 23.1262 10.7684 22.52 10.866 21.9349L7.99043 20.2848C7.70627 21.3919 7.55359 22.5537 7.55359 23.7491C7.55359 30.1726 11.9263 35.6027 17.8725 37.2612V33.9652C13.6949 32.4162 10.7133 28.4257 10.7133 23.7449ZM21.6938 9.71094C17.8555 9.71094 14.3692 11.2347 11.816 13.714L14.6873 15.3599C16.5874 13.794 19.0346 12.8427 21.6938 12.8427C24.3531 12.8427 26.8002 13.7898 28.7045 15.3599L31.5758 13.714C29.0226 11.2347 25.5364 9.71094 21.6938 9.71094ZM35.4014 20.2806L32.5259 21.9307C32.6234 22.52 32.6786 23.1219 32.6786 23.7407C32.6786 28.4215 29.697 32.412 25.5151 33.9568V37.2527C31.4613 35.5901 35.8383 30.1642 35.8383 23.7407C35.8383 22.5537 35.6856 21.3919 35.4014 20.2806ZM35.4014 20.2806L32.5259 21.9307C32.6234 22.52 32.6786 23.1219 32.6786 23.7407C32.6786 28.4215 29.697 32.412 25.5151 33.9568V37.2527C31.4613 35.5901 35.8383 30.1642 35.8383 23.7407C35.8383 22.5537 35.6856 21.3919 35.4014 20.2806ZM21.6938 9.71094C17.8555 9.71094 14.3692 11.2347 11.816 13.714L14.6873 15.3599C16.5874 13.794 19.0346 12.8427 21.6938 12.8427C24.3531 12.8427 26.8002 13.7898 28.7045 15.3599L31.5758 13.714C29.0226 11.2347 25.5364 9.71094 21.6938 9.71094ZM35.4014 20.2806L32.5259 21.9307C32.6234 22.52 32.6786 23.1219 32.6786 23.7407C32.6786 28.4215 29.697 32.412 25.5151 33.9568V37.2527C31.4613 35.5901 35.8383 30.1642 35.8383 23.7407C35.8383 22.5537 35.6856 21.3919 35.4014 20.2806ZM10.7133 23.7449C10.7133 23.1262 10.7684 22.52 10.866 21.9349L7.99043 20.2848C7.70627 21.3919 7.55359 22.5537 7.55359 23.7491C7.55359 30.1726 11.9263 35.6027 17.8725 37.2612V33.9652C13.6949 32.4162 10.7133 28.4257 10.7133 23.7449Z" />
    <Shape d="M21.6981 47.4903C20.6505 47.4903 19.6071 47.2251 18.6698 46.6863L3.03247 37.8172C1.16209 36.7481 0 34.757 0 32.6229V14.872C0 12.7337 1.16209 10.7469 3.02399 9.67768L18.6783 0.800153C20.5402 -0.264814 22.8559 -0.264814 24.7221 0.804362L40.3637 9.67348C42.234 10.7427 43.3919 12.7337 43.3919 14.872V32.6229C43.3919 34.757 42.2298 36.7481 40.3679 37.8172L24.7136 46.6948C23.7847 47.2251 22.7414 47.4903 21.6981 47.4903ZM21.6938 3.13214C21.1934 3.13214 20.6971 3.25842 20.2518 3.51519L4.59748 12.3927C3.71107 12.8978 3.15971 13.8492 3.15547 14.872V32.6187C3.15547 33.6373 3.71107 34.5887 4.60172 35.098L20.2433 43.9671C21.1425 44.4806 22.2494 44.4806 23.1401 43.9713L38.7944 35.0938C39.6766 34.5887 40.2322 33.6373 40.2322 32.6145V14.872C40.2322 13.8534 39.6766 12.9021 38.7859 12.3927L23.1486 3.5194C22.699 3.26263 22.1943 3.13214 21.6938 3.13214Z" />
    <Shape d="M21.6981 25.3367C21.4266 25.3367 21.151 25.2652 20.9092 25.1263L1.39114 13.921C0.636199 13.4874 0.377485 12.5277 0.81433 11.7784C1.25118 11.0291 2.21817 10.7724 2.97311 11.2059L21.6981 21.9566L40.4188 11.2059C41.1738 10.7724 42.1407 11.0291 42.5776 11.7784C43.0144 12.5277 42.7557 13.4874 42.0008 13.921L22.4869 25.1263C22.241 25.2652 21.9695 25.3367 21.6981 25.3367Z" />
    <Shape d="M21.6981 47.0775C20.8371 47.0775 20.1415 46.3829 20.1415 45.5327V23.745C20.1415 22.8905 20.8413 22.2002 21.6981 22.2002C22.5548 22.2002 23.2546 22.8947 23.2546 23.745V45.5284C23.2546 46.3829 22.559 47.0775 21.6981 47.0775Z" />
    <Letter d="M206.284 50.6393L204.571 47.074C204.164 46.2279 203.744 45.2766 203.6 44.8262L203.566 44.8598C203.621 45.4954 203.634 46.2952 203.642 46.9645L203.684 50.6393H202.438V43.0498H203.875L205.733 46.754C206.085 47.457 206.416 48.3536 206.518 48.7072L206.551 48.6735C206.518 48.2905 206.441 47.2044 206.441 46.5141L206.42 43.0498H207.625V50.6393H206.284Z" />
    <Letter d="M210.967 45.8699C210.279 45.8699 209.906 46.4087 209.906 47.3052H211.972C211.972 46.4087 211.577 45.8699 210.967 45.8699ZM209.898 48.1934V48.2818C209.898 49.0479 210.186 49.8603 211.28 49.8603C211.798 49.8603 212.252 49.6751 212.672 49.3131L213.147 50.0497C212.561 50.5422 211.887 50.7864 211.136 50.7864C209.554 50.7864 208.562 49.6583 208.562 47.8819C208.562 46.9054 208.774 46.2571 209.257 45.7099C209.711 45.1964 210.262 44.9648 210.971 44.9648C211.522 44.9648 212.031 45.108 212.506 45.5331C212.994 45.9709 213.236 46.6528 213.236 47.9451V48.1976H209.898V48.1934Z" />
    <Letter d="M219.695 50.6603H218.558L217.871 48.1052C217.693 47.4486 217.507 46.5941 217.507 46.5941H217.485C217.485 46.5941 217.396 47.1413 217.121 48.1599L216.446 50.6603H215.31L213.787 45.1671L214.991 45.0029L215.598 47.6885C215.751 48.3788 215.886 49.1449 215.886 49.1449H215.92C215.92 49.1449 216.031 48.4209 216.243 47.6548L216.959 45.0871H218.151L218.779 47.5875C219.012 48.4883 219.131 49.166 219.131 49.166H219.165C219.165 49.166 219.296 48.3199 219.441 47.6759L220.013 45.0871H221.273L219.695 50.6603Z" />
    <Letter d="M226.587 44.0727H225.891V46.472H226.545C227.206 46.472 227.563 46.3836 227.792 46.1521C227.999 45.9458 228.135 45.6259 228.135 45.2303C228.135 44.4684 227.715 44.0727 226.587 44.0727ZM228.356 50.6393L227.694 49.4649C227.164 48.5346 226.812 48.0084 226.392 47.5917C226.248 47.4486 226.137 47.3728 225.896 47.3602V50.6393H224.649V43.0498H226.981C228.695 43.0498 229.467 44.0348 229.467 45.2218C229.467 46.3078 228.759 47.3055 227.567 47.3055C227.842 47.4486 228.351 48.181 228.75 48.8166L229.878 50.6351H228.356V50.6393Z" />
    <Letter d="M232.609 45.8699C231.927 45.8699 231.549 46.4087 231.549 47.3052H233.615C233.615 46.4087 233.216 45.8699 232.609 45.8699ZM231.536 48.1934V48.2818C231.536 49.0479 231.825 49.8603 232.919 49.8603C233.436 49.8603 233.89 49.6751 234.31 49.3131L234.785 50.0497C234.2 50.5422 233.526 50.7864 232.775 50.7864C231.197 50.7864 230.2 49.6583 230.2 47.8819C230.2 46.9054 230.412 46.2571 230.896 45.7099C231.35 45.1964 231.901 44.9648 232.609 44.9648C233.161 44.9648 233.67 45.108 234.145 45.5331C234.633 45.9709 234.874 46.6528 234.874 47.9451V48.1976H231.536V48.1934Z" />
    <Letter d="M237.148 50.761C235.922 50.761 235.922 49.6666 235.922 49.1909V44.4638C235.922 43.7062 235.888 43.3021 235.812 42.839L237.059 42.5654C237.148 42.9064 237.156 43.3652 237.156 44.0892V48.7911C237.156 49.5361 237.19 49.6582 237.279 49.7887C237.347 49.8855 237.534 49.9402 237.678 49.8771L237.877 50.6221C237.657 50.7147 237.423 50.761 237.148 50.761Z" />
    <Letter d="M238.653 50.6391V45.1796L239.879 44.9607V50.6391H238.653ZM239.26 44.2704C238.819 44.2704 238.475 43.9084 238.475 43.4706C238.475 43.0202 238.827 42.6582 239.281 42.6582C239.714 42.6582 240.078 43.0076 240.078 43.4706C240.078 43.9084 239.714 44.2704 239.26 44.2704Z" />
    <Letter d="M243.357 50.7821C241.834 50.7821 240.982 49.7171 240.982 47.9324C240.982 45.9161 242.199 44.9521 243.446 44.9521C244.052 44.9521 244.493 45.0953 244.994 45.5541L244.387 46.3539C244.057 46.0592 243.768 45.9245 243.45 45.9245C243.064 45.9245 242.742 46.1223 242.568 46.4844C242.402 46.8253 242.335 47.3389 242.335 48.0292C242.335 48.7869 242.458 49.2667 242.712 49.5403C242.89 49.7382 243.153 49.8603 243.454 49.8603C243.84 49.8603 244.218 49.675 244.582 49.313L245.155 50.0497C244.638 50.5506 244.107 50.7821 243.357 50.7821Z" />
    <Letter d="M246.249 49.6451C246.228 49.6367 246.19 49.6324 246.147 49.6324H246.08V49.8808H246.143C246.224 49.8808 246.258 49.8724 246.283 49.8513C246.304 49.8303 246.317 49.7966 246.317 49.7587C246.313 49.6998 246.292 49.6619 246.249 49.6451ZM246.343 50.3985C246.309 50.3354 246.292 50.3144 246.258 50.247C246.169 50.0828 246.139 50.0365 246.105 50.0239C246.097 50.0197 246.088 50.0155 246.075 50.0155V50.3985H245.893V49.4851H246.237C246.398 49.4851 246.508 49.5946 246.508 49.7503C246.508 49.8892 246.415 49.9987 246.304 50.0029C246.321 50.0197 246.33 50.0281 246.343 50.0408C246.393 50.1081 246.563 50.3943 246.563 50.3943H246.343V50.3985ZM246.181 49.2915C245.834 49.2915 245.554 49.5819 245.554 49.9439C245.554 50.3059 245.834 50.6006 246.181 50.6006C246.529 50.6006 246.813 50.3059 246.813 49.9439C246.813 49.5819 246.533 49.2915 246.181 49.2915ZM246.181 50.7606C245.732 50.7606 245.367 50.4028 245.367 49.9481C245.367 49.4935 245.736 49.1357 246.181 49.1357C246.631 49.1357 246.996 49.4977 246.996 49.9481C247 50.4028 246.631 50.7606 246.181 50.7606Z" />
    <path
      d="M191.317 50.1717C189.799 50.1717 188.569 48.951 188.569 47.444C188.569 45.9371 189.799 44.7164 191.317 44.7164C192.835 44.7164 194.065 45.9371 194.065 47.444C194.065 48.9468 192.835 50.1717 191.317 50.1717ZM198.128 45.9708C197.48 43.0116 193.904 41.2689 190.142 42.0813C186.38 42.8937 183.857 45.9497 184.501 48.9089C185.15 51.8681 188.726 53.6107 192.488 52.7983C196.254 51.9901 198.777 48.9299 198.128 45.9708Z"
      fill="#00899A"
    />
    <path
      d="M191.317 49.8267C189.99 49.8267 188.917 48.7617 188.917 47.4442C188.917 46.1266 189.99 45.0617 191.317 45.0617C192.645 45.0617 193.718 46.1266 193.718 47.4442C193.718 48.7575 192.64 49.8267 191.317 49.8267ZM191.924 43.6221C189.744 43.6221 187.979 45.3774 187.979 47.5368C187.979 49.7004 189.748 51.4557 191.924 51.4557C194.104 51.4557 195.872 49.7004 195.872 47.5368C195.872 45.3774 194.104 43.6221 191.924 43.6221Z"
      fill="#80CBD5"
    />
  </svg>
);

const Letter = (props) => (
  <path
    {...props}
    css={css`
      fill: var(--heading-text-color);
    `}
  />
);

const Shape = (props) => (
  <path
    {...props}
    css={css`
      fill: #007e8a;

      .dark-mode & {
        fill: #70ccd3;
      }
    `}
  />
);

Logo.propTypes = {
  className: PropTypes.string,
  width: PropTypes.string,
};

export default Logo;
