// ==UserScript==
// @name github project highlight
// @version 0.1
// @description highlighting cards of github project which was updated
// @author keyno63
// @match https://github.com/*
// @grant none
// @require      https://code.jquery.com/jquery-latest.js
// ==/UserScript==

// should set token
const TOKEN = ''
const BORDER_COLOR = '#58CE91'
const API_BASE_URL = 'https://api.github.com/projects/columns/cards/'

const commonConfig = {
    token: TOKEN,
    limit: {
        days: 0,
        hours: 6,
        minutes: 0,
    },
    observe: false,
}



// comment out `MutationObserver` function.
// because of exist too many API call.
/*
if (commonConfig.observe) {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((_mutation) => {
            console.log("update")
            main()
        })
    })

    const mutationConfig = {
        attributes: true,
        subtree: true,
    }

    observer.observe(document.body, mutationConfig)
}
*/

main()

function main() {
    $("[ id ^= 'column-cards-' ]")
        .find("include-fragment")
        .on('load', () => {
            $('article').each((_i, e) => {
                const cardId = $(e).attr('data-card-id')
                const url = `${API_BASE_URL}${cardId}`
                console.log("request")
                fetch(url, {
                    headers: {
                        'Authorization': `token  + commonConfig.token`
                    }
                })
                    .then(response => response.json())
                    .then(json => highlight(json, e))
            })
        })
}

function highlight(json, element) {
    const updated_at = json.updated_at
    const converted_time = new Date(updated_at).getTime()
    const limit_time = setDifferenceTime(
        commonConfig.limit.days,
        commonConfig.limit.hours,
        commonConfig.limit.minutes,
    )
    if (converted_time > limit_time) {
        $(element).find("div.d-flex")
            .css("border",`solid 3px ${BORDER_COLOR}`)
    }
}

function setDifferenceTime(days, hours, minutes) {
    const dt = new Date()
    dt.setDate(dt.getDate() - days)
    dt.setHours(dt.getHours() - hours)
    dt.setMinutes(dt.getMinutes() - minutes)
    return dt.getTime()
}
