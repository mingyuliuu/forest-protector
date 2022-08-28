
import { v4 } from uuid

const addUser = async (setTasks, task, name, type, contact, address = "") => {
    const newUser = {
        id: v4(),
        name: name,
        type: type,
        contact: contact,
        address: address,
        posts: []
    }

    const res = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(newUser),
    })

    const data = await res.json()

    setTasks([...task, data])
};

const addImage = async (setTasks, url, post) => {
    const newInfo = {
        url: url,
        postID: post
    }

    const res = await fetch('http://localhost:5000/images', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(newInfo),
    })

    const data = await res.json()

    setTasks([...task, data])
};

const getcurDate = () => {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    return date
}

const addPost = async (setTasks, task, title, author, description, recordID, images) => {
    const newInfo = {
        title: title,
        author: author,
        time: getcurDate(),
        description: description,
        recordID: recordID,
        images: images
    }

    const res = await fetch('http://localhost:5000/posts', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(newInfo),
    })

    const data = await res.json()

    setTasks([...task, data])
};

const addCoordinate = async (setTasks, task, lat, lng, recordID) => {
    const newInfo = {
        lat: lat,
        lng: lng,
        recordID: recordID
    }

    const res = await fetch('http://localhost:5000/coordinates', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(newInfo),
    })

    const data = await res.json()

    setTasks([...task, data])
};

const addRecord = async (setTasks, task, title, link, coordinateID, time, posts) => {
    const newInfo = {
        title: title,
        link: link, 
        coordinateID: coordinateID, 
        time: time,
        posts: posts
    }

    const res = await fetch('http://localhost:5000/wildfireRecords', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(newInfo),
    })

    const data = await res.json()

    setTasks([...task, data])
};