# bidding-pack-components

> A pack components project

## Comment
- put common components in the src/components directory and introduce them in index.js

## Output Step
- #### 编译: npm run build
- #### 打包: npm pack

## Other System Use Step
- install components, such as:
```
npm install D:\workspace\bidding-pack-components\bidding-pack-components-1.0.0.tgz
```
- import them at main.js, such as:
```
import components from 'bidding-pack-components'
Vue.use(components);
```
- use them, such as:
```
<bidding-card-person :user="user" :person="person"></bidding-card-person>
```
