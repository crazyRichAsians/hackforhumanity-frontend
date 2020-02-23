import React from 'react'
import stats from '../images/stats.jpeg'
import styled from 'styled-components'

const S_StatsPage = styled.div`
    position: relative;
    display:flex;
    .img{
    justify-items: center;
    margin-left: 310px;
    width: 1000px;
    height: auto;
  }

`

const StatsPage = () => {
    return(
        <S_StatsPage>
            <img src={stats} className='img' />
        </S_StatsPage>

    )
}

export {StatsPage}