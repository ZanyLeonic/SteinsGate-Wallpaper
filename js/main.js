function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min; //The maximum is exclusive and the minimum is inclusive
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function setNewTiming(element, time)
{
    element.style.setProperty("--" + element.className + "-timing", time + "s");
}

function changeAnimationTime(element)
{
    var randomTiming = getRandomFloat(0.0001, 0.05);
    setNewTiming(element, randomTiming);
}

function randomVisibility()
{
    if (lastElement != null)
    {
        lastElement.style.display = "";
    }
    
    var randElement = bgcomp[getRandomInt(0, bgcomp.length)];

    randElement.style.display = "none";
    lastElement = randElement;
}

function comp06Anim()
{
    switch (getRandomInt(0,3))
    {
        case 0:
            bgcomp06.style.clipPath = "polygon(0 0, 10.5% 0, 10.5% 100%, 0 100%)";
            break;
        case 1:
            bgcomp06.style.clipPath = "polygon(0 0, 13% 0, 13% 100%, 0 100%)";
            break;
        case 2:
            bgcomp06.style.clipPath = "";
            break;
    }
}

window.wallpaperPropertyListener = {
    applyUserProperties: function(properties) {
        /**
        * Video element
        * @type {HTMLElement}
        */
        var video = document.getElementById("bg-video");
        if (properties.enableVideo && video)
        {
            if(properties.enableVideo.value == true)
            {
                video.play();
            }
            else
            {
                video.pause();
            }
        }

        /**
        * Audio element
        * @type {HTMLElement}
        */
        var audio = document.getElementById("bg-audio");
        if (properties.enableBGM && audio)
        {
            if(properties.enableBGM.value == true)
            {
                audio.play();
            }
            else
            {
                audio.pause();
            }
        }

        if (properties.BGMVolume && audio)
        {
            if (properties.BGMVolume.value != "")
            {
                if (properties.BGMVolume.value == 0)
                {
                    audio.volume = properties.BGMVolume.value = 0;
                }
                else
                {
                    audio.volume = properties.BGMVolume.value / 100;
                }
            }
        }

        var base = document.getElementById("bg-base");

        if (properties.showCopyrightInfo && base)
        {
            base.className = properties.showCopyrightInfo.value ? "bg-base-copyright" : "bg-base";
        }
    }
};