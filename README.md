# Impulse tesztfeladat kliens oldali része, React

Ez egy React gyakorló projekt. Ezt az endpoint-ot használja: [Impulse-test-API](https://impulseblog-api.herokuapp.com/api/posts).

## Pár gondolat:

Egy 48 órás Udemy React kurzus első kb. 6 óráján tanultak alapján készült a kliens. Így nyilván sok dolog nem tiszta még illetve nem ismert előttem. Ilyen volt pl. a memory leak probléma, melyet a `useEffect` hook megoldott, bár nem tudom jól használom-e, de működik. Illetve probléma volt a tag-ek listázásakor a `key` property hiánya, ez most egy egyszerű véletlenszám generálással van megoldva, nyilván éles projektben ez nem opció.

## API

Az API Node.js, MongoDB adatbázist használ. A Heroku free Dyno-jába van telepítve, így ha egy ideig nincs használatban, akkor suspend módba kerül. Ez azt jelenti hogy az első lekérdezésre a válasz elég sok ideig tart, de utána minden ok. Ez nem hiba, a Heroku működéséből adódik.

## Demó

[Demó verzió](https://impulsetest-react-client.netlify.app/)
