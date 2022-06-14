const axios = require('axios') ;
const config = require('config') ;
const { response } = require('express');

module.exports.getMarketStats = (req,res) => {
    axios.get('https://api.coinranking.com/v2/stats', {
        headers: {
            'x-access-token': config.get('coinRankingApiKey')

        }
    })
        .then(response => {
            res.json(response.data.data) ;
        })
        .catch(err => {
            res.json(err) ;
            console.log(err) ;
        })
}


module.exports.getCoins = (req,res) => {

    let limit = req.params.numOfCoins ;

    axios.get(`https://api.coinranking.com/v2/coins?limit=${limit}`, {
        headers: {
            'x-access-token': config.get('coinRankingApiKey')
        }
    })
        .then(response => {
            res.json(response.data.data.coins) ;
        })
        .catch(err => {
            res.json(err) ;
            console.log(err) ;
        })
}

module.exports.getCoin = (req,res) => {

    let uuid = req.params.uuid ;

    axios.get(`https://api.coinranking.com/v2/coin/${uuid}`, {
        headers: {
            'x-access-token': config.get('coinRankingApiKey')

        }
    })
        .then(response => {
            res.json(response.data.data.coin) ;
        })
        .catch(err => {
            res.json(err) ;
            console.log(err) ;
        })
}