import toast from 'react-hot-toast'

const sendData = (url, data) => (

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((res) => res.json())
        .then((data) => {

            if (data.sussess) {
                return toast.success(data.massage);
            } else {
                toast.error(data.massage);
            }
        })

)

export default sendData