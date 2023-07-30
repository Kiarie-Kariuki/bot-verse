import React from 'react';

const BotSpecs = ({ bot, onEnlist, onBackToList }) => {
  return (
    <div className="bot-specs">
      <h2>Bot Details</h2>
      <div className="bot-details">
        <img src={bot.avatar_url} alt={bot.name} />
        <p>Name: {bot.name}</p>
        <p>Class: {bot.bot_class}</p>
        <p>Health: {bot.health}</p>
        <p>Damage: {bot.damage}</p>
        <p>Armor: {bot.armor}</p>
        <p>Catchphrase:{bot.catchphrase}</p>
        <p>Created: {bot.created_at}</p>
        <p>Last Update: {bot.updated_at}</p>

        <button className="enlist-btn" onClick={() => onEnlist(bot)}>Enlist</button>
        <button className='back-btn' onClick={onBackToList}>Back to List</button>
      </div>
    </div>
  );
};

export default BotSpecs;
