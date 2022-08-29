const fetchImageByRecordID = async (recordID) => {
    const res = await fetch(`http://localhost:5000/images?recordID=${recordID}`)
    const data = await res.json()
    return data
}

const fetchRecordByCoordinateID = async (coordinateID) => {
    const res = await fetch(`http://localhost:5000/images?recordID=${recordID}`)
    const data = await res.json()
    return data
}