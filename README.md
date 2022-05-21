# Nuxt Hydration node mismatch issue reproduction

Steps to reproduce:
1. Clone repo
2. `npm ci`
3. `npm run dev`
4. Open http://localhost:3000/
5. See console logs. Expected Vue warn:
   
   ![зображення](https://user-images.githubusercontent.com/1662812/169662039-2c8965e7-c471-402f-bf9d-bbc7021a034a.png)
6. Try navigate berween Home and Page2. Current behavior: It does not load when you go to another page. There is a white screen:
7. 
https://user-images.githubusercontent.com/1662812/169662746-bba5aa89-8506-42d4-adfb-2735f533d1f6.mp4

