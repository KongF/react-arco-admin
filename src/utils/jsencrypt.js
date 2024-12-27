import { JSEncrypt } from 'jsencrypt'

// 密钥对生成 http://web.chacuo.net/netrsakeypair

const publicKey =
'-----BEGIN PUBLIC KEY-----\n'+
    'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvDcw81f6dfI7t3JgyWRO'+
'L00Z816fLEVqbJPWnT8I88y+Aa6IHCH23SpdfiCEQAd6JTnDCxafTouxMnibQaUQ'+
'34IgzrTFubEdG8nJOdbOB6FdT4LLZRrQYCGinzu1rnO01+XPFawizkuGcbgzDfdI'+
'E1WhTbIZDGXGAuTPiMPK6Uk7A0rx9T6rNUnb0BmEFTHJ3cTmkWx+o3cegAPAZXYu'+
'Bj/JRip0zvrGkffvGl4mZ2tpX8vhpi6CAI9+cw3nblOV5ofOYvDYpp0CyEb7zOYo'+
'5n83ODX/dudPVFWotBs8loULpk4ilseTj7K0n0tDOdwSKtjo418HfhmFYstlgG6q'+
'ywIDAQAB'+
'-----END PUBLIC KEY-----'

const privateKey =
'-----BEGIN PRIVATE KEY-----\n' +
'MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC8NzDzV/p18ju3'+
'cmDJZE4vTRnzXp8sRWpsk9adPwjzzL4BrogcIfbdKl1+IIRAB3olOcMLFp9Oi7Ey'+
'eJtBpRDfgiDOtMW5sR0byck51s4HoV1PgstlGtBgIaKfO7Wuc7TX5c8VrCLOS4Zx'+
'uDMN90gTVaFNshkMZcYC5M+Iw8rpSTsDSvH1Pqs1SdvQGYQVMcndxOaRbH6jdx6A'+
'A8Bldi4GP8lGKnTO+saR9+8aXiZna2lfy+GmLoIAj35zDeduU5Xmh85i8NimnQLI'+
'RvvM5ijmfzc4Nf92509UVai0GzyWhQumTiKWx5OPsrSfS0M53BIq2OjjXwd+GYVi'+
'y2WAbqrLAgMBAAECggEAXSrQz1RYhbPvvYIfyPEfBqka1G6dSjPeV3ri/JmsW8qY'+
'r4puk8Z4Rchn2TxNWsiYvP6XvtBm8WGSyFINQHRuIsVuagPv8Fhs+Ulsk3XyLLLC'+
'1s3+0sBwL3XW4w2ShJWACnMWjDrWS9n05ivxEdO7WN7FZwlm/s0ONHaBCMkqk0k0'+
'M+DNIO60jHL6y69xrC0RXqwDeDGQSg89zAyBQMZKg3wK31+Cz2GJMEQWYYg3dcCB'+
'77R5SXIWorFrFYzxHTgoiDITc0ElY2DFmS6PFRJL8QqWfmCGX1q516DlpjayJiSN'+
'OmKCQEOxS3TZmjHNzuwy+4PZZdYLsK48X2tk1GOLaQKBgQDkH3secAqAPPW3C4ND'+
'WW66iD++R45ZDxi4mz3Vey4jPBbXsHxYMMPiSII719j/lfKvDJL/hbuRFi9btHw6'+
'lVRFWDWRTEVcJQZX8kydgpqLx/xw3T5sj0IpN4sn6Qhoq7kJDxxfy3DglRJI1xG/'+
'ahq1i5gwdQv4s3TayFhr2adTBwKBgQDTN0MBwdtzXPYsNkY1h+cYTPJ9UKt1HlHB'+
'4zVQ5kKuhOLb00KpwP0JWIel0O/JQIBwppUFhwxMiN7vHr9UJhOvFx5/nffwiPUs'+
'UNn09fNhsAFozAZdMKl8zYyWDy4g7+GY/5Dsoq7zUK/9cD3vGGDgUkZnHzwfJPeQ'+
'Rd9gFOPlHQKBgQCdqDghsBNBz1+N8tH0AOHq3nEXY0K4wBs4smmImcooJcYvqNQ2'+
'6vTl9XC0RRe+g/YmDo2lNNqNigSO32yf3EZSaoUS9uBUr23z6AwVK4b9pegMZItY'+
'4aU68R0mJwJdvJhz71KPzf0j6UKqvqCQZpcw8tnqW2o7pmLTNXUOjGz8jwKBgCFM'+
'aQfx5AL/+N9nfxIZZtlx6BjRivZf3UvP4ivq4UBaOtmlKLFSd5HtnxUJJ4R24sjf'+
'ukawz8ORIHRaSJefmSLVZj2ATgJh1SUzaekwjTotYUuAPtCaR14hmbRemEshBlP0'+
'loh37VT2t4ghFeKH2V4EGo1PY08VqOHZ4ilnobYRAoGAO09fr2PTtIONzQYu1ieT'+
'+HX2j8DCHpITFE8qcjLxLo6VHueZNTXmWd08fRhW9gmCaT4UC0+Lhabmz6GQwnUQ'+
'088co1j2UYhRU8QHASHJKtoMuV1FLpN9LI1A2k3L/gecrsh3qZUtg/ZYjOkD8lZU'+
'KsIAcbKnPrAaKyo3muFwVAE='+
'-----END PRIVATE KEY-----'

// 加密
export function encrypt(txt) {
    const encryptor = new JSEncrypt()
    encryptor.setPublicKey(publicKey) // 设置公钥
    return encryptor.encrypt(txt) // 对数据进行加密
}

// 解密
export function decrypt(txt) {
    const encryptor = new JSEncrypt()
    encryptor.setPrivateKey(privateKey) // 设置私钥
    return encryptor.decrypt(txt) // 对数据进行解密
}
