import React from 'react';

const BotArmy = ({ army, onRelease, onDischarge }) => {
  return (
    <div className="bot-army">
      <h2>Your Bot Army</h2>
      <p> You can release and discharge the bot from your army in this section.</p>
      <div className="bot-army-container">
        {army.map((bot) => (
            <div className="bot-army-card" key={bot.id}>
                <img src={bot.avatar_url} alt={bot.name}/>
                <p>Name: {bot.name}</p>
                <p>Class: {bot.bot_class}</p>
                <p>Health: {bot.health}</p>
                <p>Damage: {bot.damage}</p>
                <p>Armor: {bot.armor}</p>
                <button className="releaseBtn" onClick={() => onRelease(bot)}>Release</button>
                <button className="dischargeBtn" onClick={() => onDischarge(bot)}> X </button>
            </div>
          ))}
        </div>
    </div>
  );
};

export default BotArmy;
