// @ts-nocheck

import styled from 'styled-components'
import { IconButton, Slider as MDSlider, withStyles } from '@material-ui/core'

export const Slider = withStyles({
  root: {
    color: '#404040',
    height: 8,
    padding: '5px 0'
  },
  thumb: {
    height: 12,
    width: 12,
    backgroundColor: '#fff',
    marginTop: -4,
    marginLeft: -6,
    '&:focus,&:hover,&$active': {
      boxShadow: 'inherit'
    }
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)'
  },
  track: {
    height: 4,
    borderRadius: 2,
    backgroundColor: '#B3B3B3'
  },
  rail: {
    height: 4,
    borderRadius: 2
  }
})(MDSlider)

export const Container = styled.div`
  display: flex;
  height: 88px;
  width: 100%;
  background-color: #282828;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #121212;
  
  .music{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 16px;
    width: 275px;
    
    .thumbnail{      
      height: 56px;
      width: 56px;
      background-color: rgba(139,139,139,0.72);
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-end;
      position: relative;
      left: 0;
      transition: all 180ms ease-in-out;
      
      button{
        opacity: 0;
        transition: all 200ms ease-in-out;
      }
      
      &:hover{      
        button{
          opacity: 1;
          background-color: rgba(0,0,0,0.6);
        }
      }
      
      &.hide{
        left: -72px;
      }
    
      & > img{
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
    
    
    
    .music-info{
      margin-left: 14px;
      display: flex;
      flex-direction: column;
      position: relative;
      transition: all 180ms ease-in-out;
      left: 0;
      
      &.hide{
        left: -72px;
      }
      
      .music-title{
        display: flex;
        flex-direction: row;
        margin-bottom: 4px;
        align-items: center;
        
        .title{
          cursor: pointer; 
          
          span{
            font-size: 14px;
            font-weight: 600;
            color: #ffffff;
            letter-spacing: 0.4px;  
        
            &:hover{
              color: #ffffff;
              border-bottom: 1px solid #ffffff;
            }
          }  
        }
        
        button{
          width: 16px;
          height: 16px;
          margin-left: 14px;
          
          &.active{
            i{
              color: red
            }
          }
          
          &:hover *{
            color: #ffffff;
          }
          
          &.active:hover *{
            color: red;
          }
          
          &:active *{
            color: #A4A4A4;
          }
          
          i{
            color: #A4A4A4;
          }
          
        }
      }
      
      .author-name{
        cursor: pointer;
          
        span{
          font-size: 12px;
          font-weight: 600;
          color: #999999;
          letter-spacing: 0.2px;
          padding-bottom: 2px;
                 
          &:hover{
            color: #ffffff;
            border-bottom: 1px solid #ffffff;
          }
        }
      }
    }
  }
`

export const Controls = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  
  .progress-slider{
    width: 85%;
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
    div.time{
      font-size: 12px;
      font-weight: 600;
      color: #9A9A9A;
      margin-bottom: 4px;
      width: 60px;
      
      &.progress{
        text-align: right;
      }
    }
    
    .MuiSlider-root{
      flex: 1;
      margin: 0 14px;
    
      .MuiSlider-thumb {
        display: none !important;
      }
    
      &:hover .MuiSlider-track{
        background-color: #1EB954 !important;
      }
      
      &:hover .MuiSlider-thumb {
        display: block !important;
      }
    }
  }
  
  .buttons{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`

export const SideControls = styled.div`
  width: 275px;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding-right: 24px;
  
  button{
    height: 24px;
    width: 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 2px;
    
    &:hover{
      i{
        color: #ffffff;
      }
    }
    
    &:active{
      i{
        color: #B3B3B3;
      }
    }
    
    i{
      color: #B3B3B3;
    }
  }
  
  .volume-slider{
    width: 85px;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 3px;
    margin-left: 8px;
    margin-right: 13px;
    
    
    .MuiSlider-root{
      .MuiSlider-thumb {
        display: none !important;
      }
    
      &:hover .MuiSlider-track{
        background-color: #1EB954 !important;
      }
      
      &:hover .MuiSlider-thumb {
        display: block !important;
      }
    }
  }
`

export const ThumbButton = styled(IconButton)`
  position: absolute !important;
  top: 5px;
  right: 5px;
  
  &.MuiIconButton-colorPrimary {
    color: #ffffff !important;
  }
  
`

export const Button = styled.button`
  height: 36px;
  width: 36px;
  border-radius: 50%;
  background-color: transparent;
  border: none;
  margin: 0 6px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  
  &.active .dot{
    display: block;
    height: 4px;
    width: 4px;
    border-radius: 2px;
    background-color: #1EB954;
    position: absolute;
    align-self: center;
    bottom: 3px;
  }
  
  &:hover *{
    color: #ffffff;
  }
  
  &:active *{
    color: #b3b3b3;
  }
  
  &.active *{
    color: #20d760;
  }
  
  &.large{
    height: 42px;
    width: 42px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    &:hover{
      transform: scale(1.05);
      
      .control{
        border-color: #ffffff;
      }
    }
    
    &:active{
      & *{        
        color: #B3B3B3;
      }
    
      color: #B3B3B3;
      transform: scale(1);
      
      .control{
        border-color: #B3B3B3;
      }
    }
    
    .control{
      height: 34px;
      width: 34px;
      border-radius: 50%;
      border: 1px solid #B3B3B3;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
  }
  
  .control-icon{  
    i{
      color: #B3B3B3;
    }
  }
`
