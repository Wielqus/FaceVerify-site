---
name: Server library
route: /docs/server

---
# Server library

Install library via pip
```bash
pip install face_verify
```

Use register function to check image and get face encoding witch you can save in your database.
```python
face_encoding = face_verify.register(face)
```
* face - Image in Base64 coding

Use verify function to verify user
```python
verify = face_verify.verify(face, saved_faces)
```
* face - Image in Base64 coding
* saved_faces - Saving faces