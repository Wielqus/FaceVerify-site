---
name: Client library
route: /docs/client

---
# Client library

Put the script on your website

```javascript
<script crossorigin src="https://unpkg.com/face-verify@1.0.1/dist/index.js"></script>
```
Initalize component
```javascript
FaceVerify.FaceVerify.init(container, function)
```

* container - HTML element where you want to load the FaceVerify component
* function - callback with face parameter 

Example:
```javascript
FaceVerify.FaceVerify.init(container, (face) => {
                faceInput.value = face
            })
```

Load face to your input, so u can submit it with form or something else